import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewPizza() {
	const navigate = useNavigate()
	const [data, setData] = useState({
		name: '',
		image: '',
		ingredients: ''
	})

	const handleChange = (e)=>{
		setData({...data, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) =>{
		e.preventDefault()
		fetch("/api/pizzas",{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
		.then(res => res.json())
		.then(console.log)
		.catch(err => console.log(err))
		.finally(()=>{
			navigate("/")
			alert('Pizza added successfully 😊')
		})

	}

	return (
		<form className='card my-3 container bg-light' onSubmit={handleSubmit} >
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
  		
			<input className='btn btn-success btn-sm my-2' type='submit' />
		</form>
	)
}

export default NewPizza