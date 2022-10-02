import React from 'react'
import { GrEdit } from 'react-icons/gr'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom'
import useGetData from '../hooks/getData'
import Loading from './Loading'

function PizzaView() {
	const {id} = useParams()
	const navigate = useNavigate()
	const {data, err, load, setData} = useGetData(`/pizzas/${id}`)

	try {
		return (
			<div className="card">

			  <div className="view overlay">
			    <img className="card-img-top" src={data.image || require(`../assets/${data.name}.jpeg`)}
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
					<div className=' container-fluid  pizza-btns'>
						<button className='btn btn-primary btn-sm' onClick={()=> navigate(`/pizza/${id}/edit`)}><GrEdit/></button>
						<button className='btn btn-danger btn-sm' onClick={()=> navigate(`/pizza/${id}/edit#bottom`)}><RiDeleteBin6Line/></button>
						<div></div>
					</div>
			  </div>

			</div>

		)
	} catch (error) {
		return <Loading/>
	}
	
}

export default PizzaView