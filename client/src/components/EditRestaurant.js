import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import useGetData from '../hooks/getData'

function EditRestaurant() {
	const {id} = useParams()
	const navigate = useNavigate()
	const [data, setData] = useState({
		address: '',
		name: '',
		review: '',
		description: ''
	})
	// const {data, err, load, setData} = useGetData(`/restaurants/${id}`)

	useEffect(()=>{
		fetch(`/restaurants/${id}`)
		.then(res=> res.json())
		.then(items=>setData(items))
	}, [])

	const handleFormSubmission = async (e, func) => {
		e.preventDefault();

		const url = func === 'delete' ? "/restaurants" : `/restaurants/${id}`
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
		navigate('/restaurants')
	}

	const handleChange = (e)=>{
		setData({...data, [e.target.name]: e.target.value})
	}

	return (
		<form className='card my-3 container bg-light'>
			<div className="form-outline mb-4 mt-2">
				<label className="form-label" htmlFor='name'>Name</label>
    		<input name='name'  type="text" className="form-control" onChange={handleChange} value={data?.name} />
  		</div>

  		<div className="form-outline mb-4">
				<label className="form-label" htmlFor='address'>Address</label>
    		<input name='address' onChange={handleChange} value={data?.address} type="text" className="form-control" />
  		</div>
  		<div className="form-outline mb-4">
				<label className="form-label" htmlFor='review'>Review</label>
    		<textarea name='review' onChange={handleChange} value={data?.review} className='form-control' rows='3'/>
  		</div>
  		<div className="form-outline mb-4">
				<label className="form-label" htmlFor='description'>Description</label>
    		<textarea name='description' onChange={handleChange} value={data?.description} className='form-control' rows='3'/>
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

export default EditRestaurant