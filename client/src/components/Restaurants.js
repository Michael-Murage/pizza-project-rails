import React from 'react'
import useGetData from '../hooks/getData'
import Restaurant from './Restaurant'

function Restaurants() {
	const { data, err, load, setData } = useGetData("/restaurants")
	
	return (
		<div className='container rests-cont'>
			{(Array.isArray(data) ? data : []).map(rest =>{
				return <Restaurant rest={rest} key={rest.id}/>
			})
				
			}
			
		</div>
	)
}

export default Restaurants