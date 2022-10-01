import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'
import Loading from './Loading'

function Pizza({ pizza }) {
	return (
		<div>
			{
			(Array.isArray(pizza) ? pizza : []).map((piz)=>{
				return(
					<div key={piz.id} className="row my-3 bg-light pizza-cont" data-toggle="tooltip" data-placement="top">
						<div className='col col-lg-9 col-md-9 col-sm-7'>
							{piz.image ? <img src={piz.image}/> : <Loading/>}
						</div>
						<div className='col col-lg-3 col-md-3 col-sm-5 pizza-div'>
							<p className='pizza-desc'>{piz.name} pizza</p>
							{/* <button className="btn btn-warning btn-sm"><RiShoppingCart2Line/></button> */}
						</div>
					</div>
				)
			})
		}
		</div>
	)
}

export default Pizza