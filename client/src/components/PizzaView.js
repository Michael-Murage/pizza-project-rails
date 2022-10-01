import React from 'react'
import { useParams } from 'react-router-dom'
import useGetData from '../hooks/getData'
import Loading from './Loading'

function PizzaView() {
	const {id} = useParams()
	const {data, err, load, setData} = useGetData(`/pizzas/${id}`)

	console.log(data);
	try {
		return (
			<div className="card">

			  <div className="view overlay">
			    <img className="card-img-top" src={require(`../assets/${data.name}.jpeg`)}
			      alt={data.name}/>
			    <a>
			      <div className="mask rgba-white-slight"></div>
			    </a>
			  </div>

			  <div className="card-body elegant-color white-text rounded-bottom">

			    <a className="activator waves-effect mr-4"><i className="fas fa-share-alt white-text"></i></a>
			    <h4 className="card-title">{data.name}</h4>
			    <hr className="hr-light"/>
			    <p className="card-text white-text mb-4">{data.ingredients}</p>
			    {/* <a href="#!" className="white-text d-flex justify-content-end">
			      <h5>Read more <i className="fas fa-angle-double-right"></i></h5>
			    </a> */}

			  </div>

			</div>

		)
	} catch (error) {
		return <Loading/>
	}
	
}

export default PizzaView