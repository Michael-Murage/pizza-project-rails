import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewRestaurant() {
	const navigate = useNavigate()
	const [data, setData] = useState({
		name: '',
		address: '',
		review: '',
		description: ''
	})

	const handleChange = (e)=>{
		setData({...data, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) =>{
		e.preventDefault()
		fetch("/api/restaurants",{
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
			navigate("/restaurant")
			alert('Restaurant added successfully 😊')
		})

	}

	return (
		<form className='card my-3 container bg-light' onSubmit={handleSubmit}>
			<div className="form-outline mb-4 mt-2">
				<label className="form-label" htmlFor='name'>Name</label>
    		<input name='name'  type="text" className="form-control" onChange={handleChange} value={data?.name} />
  		</div>

  		<div className="form-outline mb-4">
				<label className="form-label" htmlFor='address'>Address</label>
    		<input name='address' onChange={handleChange} value={data?.address} type="text" className="form-control" />
  		</div>
  		<div className="form-outline mb-4">
				<label className="form-label" htmlFor='description'>Description</label>
    		<textarea name='description' onChange={handleChange} value={data?.description} className='form-control' rows='3'/>
  		</div>
  		<div className="form-outline mb-4">
				<label className="form-label" htmlFor='review'>Review</label>
    		<textarea name='review' onChange={handleChange} value={data?.review} className='form-control' rows='3'/>
  		</div>

			<input className='btn btn-success btn-sm my-2' type='submit' />
		</form>
	)
}

export default NewRestaurant