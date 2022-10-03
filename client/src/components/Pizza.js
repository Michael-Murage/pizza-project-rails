import React from 'react'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'

function Pizza({ piz }) {
	const navigate = useNavigate()
	const loadPizza = (id) =>{
		navigate(`/pizza/${id}`)
	}
	try {
		return (
			<div onClick={()=>loadPizza(piz.id)} className="row my-3 bg-light pizza-cont" data-toggle="tooltip" data-placement="top">
						<div className='col col-lg-9 col-md-9 col-sm-7'>
							{piz.name ? <img src={piz.image || require(`../assets/${piz.name}.jpeg`)} alt={piz.name}/> : <Loading/>}
						</div>
						<div className='col col-lg-3 col-md-3 col-sm-5 pizza-div'>
							<p className='pizza-desc'>{piz.name} pizza</p>
							{/* <button className="btn btn-warning btn-sm"><RiShoppingCart2Line/></button> */}
						</div>
			</div>
		)
	} catch (error) {
		console.log(error);
		return <Loading/>
	}
	
}

export default Pizza