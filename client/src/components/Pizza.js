import React from 'react'
import Loading from './Loading'

function Pizza({ pizza }) {
	return (
		<div>
			{
			(Array.isArray(pizza) ? pizza : []).map((piz)=>{
				return(
					<div key={piz.id}>
						{piz.image ? <img src={piz.image}/> : <Loading/>}
						<p>{piz.name}</p>
					</div>
				)
			})
		}
		</div>
	)
}

export default Pizza