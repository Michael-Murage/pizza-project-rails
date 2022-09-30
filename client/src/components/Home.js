import React from 'react'
import Pizzas from './Pizzas'

function Home({ pizza, setPizza, handleSearch}) {
	return (
		<div className='container-fluid text-center'>
			<Pizzas pizza={pizza} setPizza={setPizza}/>
		</div>
	)
}

export default Home