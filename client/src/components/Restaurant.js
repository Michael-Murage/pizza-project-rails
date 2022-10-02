import React, { useState } from 'react'
import { GrEdit } from 'react-icons/gr'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

function Restaurant({ rest, key }) {
	const [summary, setSummary] = useState(true)
	const [descSummary, setDescSummary] = useState(true)
	const navigate = useNavigate()

	const swapReview = (state) => setSummary(state)
	const loadRestaurant = (id) => navigate(`/restaurant/${id}`)
	const swapDesc = (state) => setDescSummary(state)

	const loadEdit = (method) => method === 'edit' ? navigate(`/restaurant/${rest.id}/edit`) : navigate(`/restaurant/${rest.id}/edit#bottom`)

	return (
		<div className='rest-cont my-3 container-fluid'>
			<div className='row my-3 rest-cont' key={key}>
					<div className='col col-md-5 rest-text border rounded-right rounded-bottom' onClick={()=>loadRestaurant(rest.id)}>
						{/* <h1>{rest.id}</h1> */}
						<h3>{rest.name}</h3>
						<p>{rest.address}</p>
					</div>
					<div className='col col-md-7'>
						<p className='rest-text' onClick={()=>swapReview(!summary)}>{summary ? rest.review_summary : rest.review}</p>
						<button className='btn btn-success btn-sm' onClick={()=>loadEdit('edit')}><GrEdit/></button>
						<hr/>
						<button className='btn btn-danger btn-sm' onClick={()=>loadEdit('delete')}><RiDeleteBin6Line/></button>
					</div>
			</div>
			<div className='row container-fluid'>
				<p className='rest-text' onClick={()=>swapDesc(!descSummary)}>{descSummary ? rest.description.slice(0, 60).concat('...') : rest.description}</p>
			</div>
		</div>
	)
}

export default Restaurant