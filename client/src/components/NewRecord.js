import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewRecord() {
	const navigate = useNavigate()
	const [err, setErr] = useState()
	const [piz, setPiz] = useState([])
	const [rest, setRest] = useState([])
	const [record, setRecord] = useState({
		price: null,
		pizza_id: '',
		restaurant_id: ''
	})

	useEffect(()=>{
		fetch("/pizza_only")
		.then(res=>res.json())
		.then(data=>setPiz(data))

		fetch("/rest_only")
		.then(res=>res.json())
		.then(data=>setRest(data))
	}, [])

	const handleChange=(e)=>{
		setRecord({...record, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) =>{
		e.preventDefault()
		fetch("/restaurant_pizzas",{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(record)
		})
		.then(res => res.json())
		.then(data => {
			if(data.errors){
				alert('There seems to be an error in your input')
				alert(data.errors[0])
			}else{
				navigate("/record")
				alert('Record added successfully 😊')
			}
		})
		.catch(err => console.log(err))

	}

	return (
		<form className='card my-3 container bg-light' onSubmit={handleSubmit}>

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
				{/* {err ? <h1>{err}</h1> : ''} */}
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
		<div className="form-outline mb-4">
			<label className="form-label" htmlFor='price'>Price</label>
			<input type='number' name='price' onChange={handleChange} value={record.price} className='form-control'/>
		</div>
		{
			(Array.isArray(err) ? err : []).map(e => <h1 className='text-danger' key={e}>{e}</h1>)
		}
		<input className='btn btn-success btn-sm my-2' type='submit' />
	</form>
	)
}

export default NewRecord