import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGetData from '../hooks/getData'

function Record() {
	const {id} = useParams()
	const navigate = useNavigate()
	const [piz, setPiz] = useState([])
	const [rest, setRest] = useState([])

	const {data, setData} = useGetData(`/restaurant_pizzas/${id}`)

	useEffect(()=>{
		fetch("/pizza_only")
		.then(res=>res.json())
		.then(data=>setPiz(data))

		fetch("/rest_only")
		.then(res=>res.json())
		.then(data=>setRest(data))
	}, [])

	const handleFormSubmission = async (e, func) => {
		e.preventDefault();

		const url = `/restaurant_pizzas/${id}`
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
		navigate('/record')
		alert('Record edited successfully 😊')
	}

	const handleChange=(e)=>{
		setData({...data, [e.target.name]: e.target.value})
	}

	return (
		<form className='card my-3 container bg-light'>
			<div className="form-outline mb-4">
				<label className="form-label" htmlFor='price'>Price</label>
				<input type='number' name='price' onChange={handleChange} value={data?.price} className='form-control'/>
			</div>

			<div className="form-outline mb-4">
				<label className="form-label" htmlFor='pizzas'>Pizza</label>
				<select className="form-select" aria-label="pizzas" name='pizza_id' onChange={handleChange}>
					<option>Open this select menu</option>
					{
						(Array.isArray(piz) ? piz : []).map(item=>{
							return(
								<option key={item.id} value={item.id}>{item.name}</option>
							)
						})
					}
				</select>
			</div>

			<div className="form-outline mb-4">
				<label className="form-label" htmlFor='restaurants'>Restaurant</label>
				<select className="form-select" aria-label="restaurants" name='restaurant_id' onChange={handleChange}>
					<option>Open this select menu</option>
					{
						(Array.isArray(rest) ? rest : []).map(item=>{
							return(
								<option key={item.id} value={item.id}>{item.name}</option>
							)
						})
					}
				</select>
			</div>
			<button className='btn btn-warning btn-sm my-2' onClick={(e)=>handleFormSubmission(e, 'update')} type='submit' >Update</button>
			<button className='btn btn-danger btn-sm my-2' id='bottom' onClick={(e)=>handleFormSubmission(e, 'delete')} type='submit' >Delete</button>
		</form>

	)
}

export default Record