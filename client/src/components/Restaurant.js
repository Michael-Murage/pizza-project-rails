import React, { useState } from 'react'
import { GrEdit } from 'react-icons/gr'

function Restaurant({ rest }) {
	const [summary, setSummary] = useState(true)

	const swapReview = (state) => setSummary(state)

	return (
		<div className='row my-3 rest-cont' key={rest.id}>
					<div className='col col-md-5'>
						{/* <h1>{rest.id}</h1> */}
						<h3>{rest.name}</h3>
						<p>{rest.address}</p>
					</div>
					<div className='col col-md-7'>
						<p className='rest-text' onClick={()=>swapReview(!summary)}>{summary ? rest.review_summary : rest.review}</p>
						<button className='btn btn-success btn-sm'><GrEdit/></button>
					</div>
			</div>
	)
}

export default Restaurant