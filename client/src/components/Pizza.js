import React from 'react'
import Loading from './Loading'

function Pizza({ pizza }) {
	return (
		<div>
			{
			(Array.isArray(pizza) ? pizza : []).map((piz)=>{
				return(
					<div key={piz.id} className="row my-3">
						<div className='col col-lg-9 col-md-9 col-sm-7'>
							{piz.image ? <img src={piz.image}/> : <Loading/>}
						</div>
						<div className='col col-lg-3 col-md-3 col-sm-5 pizza-div'>
							<p className='pizza-desc'>{piz.name} pizza</p>
						</div>
					</div>
				)
			})
		}
		</div>
	)
}

export default Pizza