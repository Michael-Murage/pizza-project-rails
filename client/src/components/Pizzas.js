import React, { useEffect, useState } from 'react'
import Pizza from './Pizza'

function Pizzas() {
	const [pizza, setPizza] = useState([])
	const [none, setNone] = useState(false)

	useEffect(()=>{
		(async()=>{
			let res = await fetch('/pizzas')
			try {
				let json = await res.json()
				setPizza(json)
			} catch (error) {
				console.log(error);
			}
		})()
	}, [])

	return (
		<>
		<Pizza pizza={pizza}/>
		</>
	)
}

export default Pizzas