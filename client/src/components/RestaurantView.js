import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useGetData from '../hooks/getData'
import Loading from './Loading'

function RestaurantView() {
	const {id} = useParams()
	const [loading, setLoading] = useState(true)
	const {data, err, load, setData} = useGetData(`/restaurants/${id}`)
	console.log(data);
	// console.log(err);
	// console.log(load);

	try {
		return (
		<div className='card container my-3'>
			<div className='col col-md-10'>
				<div className='row text-center my-3'>
					<h1>{data.name}</h1>
				</div>
				<div className='row text-center my-3'>
					<h3>{data.address}</h3>
				</div>
				<div className='row text-center my-3'>
					<h3>Pizzas</h3>
				</div>

				<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  				<ol className="carousel-indicators">
						{
							(Array.isArray(data.pizzas) ? data.pizzas : []).map(piz=>{
								return <li key={piz.id} data-target="#carouselExampleCaptions" data-slide-to={piz.id} className="active"></li>
							})
						}
  				</ol>
  				<div className="carousel-inner text-center ml-auto">
						{
						(Array.isArray(data.pizzas) ? data.pizzas : []).map(piz=>{
							return (
								<div className="carousel-item active text-center container" key={piz.id}>
  				    		<img src={require(`../assets/${piz.name}.jpeg`)} className="d-block w-100 mx-auto" alt={piz.name}/>
  				    		<div className="carousel-caption d-none d-md-block">
  				      		{/* <h5>{piz.name} pizza</h5> */}
  				      		<p>{piz.name} pizza</p>
  				    		</div>
  				 	 		</div>
							)
							
						})
						}
  				  

  				</div>
  				<button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
  				  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  				  <span className="sr-only">Previous</span>
  				</button>
  				<button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
  				  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  				  <span className="sr-only">Next</span>
  				</button>
				</div>
			</div>
		</div>
	)
	} catch (error) {
		return <Loading/>
	}
	
}

export default RestaurantView