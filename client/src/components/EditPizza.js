import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditPizza() {
	const {id} = useParams()
	const navigate = useNavigate()
	const [data, setData] = useState({
		name: '',
		ingredients: '',
		image: ''
	})

	useEffect(()=>{
		fetch(`/api/pizzas/${id}`)
		.then(res=> res.json())
		.then(items=>setData(items))
		// eslint-disable-next-line
	}, [])

	const handleFormSubmission = async (e, func) => {
		e.preventDefault();

		const url = `/api/pizzas/${id}`
		const method = func === 'delete' ? "DELETE" : "PUT"
		

		try {
			const res = await fetch(url, {
				method,
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})

			if (res.status === 200 || res.status === 304) setData({})

		} catch (error) {
			console.log(error);
		}
		navigate('/')
		alert('Pizza edited successfully 😊')
	}

	const handleChange = (e)=>{
		setData({...data, [e.target.name]: e.target.value})
	}

	return (
		<form className='card my-3 container bg-light'>
			<div className="form-outline mb-4 mt-2">
				<label className="form-label" htmlFor='name'>Flavour</label>
    		<input name='name'  type="text" className="form-control" onChange={handleChange} value={data?.name} />
  		</div>

  		<div className="form-outline mb-4">
				<label className="form-label" htmlFor='image'>Image URL</label>
    		<input name='image' onChange={handleChange} value={data?.image} type="text" className="form-control" />
  		</div>
  		<div className="form-outline mb-4">
				<label className="form-label" htmlFor='ingredients'>Ingedients</label>
    		<textarea name='ingredients' onChange={handleChange} value={data?.ingredients} className='form-control' rows='2'/>
  		</div>
			{/* <div className="form-outline mb-4">
				<label className="form-label" htmlFor='pizzas'>Pizzas</label>
				<select class="form-select" aria-label="pizzas">
					{

					}
  				<option selected>Open this select menu</option>
				  <option value="1">One</option>
				  <option value="2">Two</option>
				  <option value="3">Three</option>
				</select>
			</div> */}
			<button className='btn btn-warning btn-sm my-2' onClick={(e)=>handleFormSubmission(e, 'update')} type='submit' >Update</button>
			<button className='btn btn-danger btn-sm my-2' id='bottom' onClick={(e)=>handleFormSubmission(e, 'delete')} type='submit' >Delete</button>
		</form>
	)
}

export default EditPizza