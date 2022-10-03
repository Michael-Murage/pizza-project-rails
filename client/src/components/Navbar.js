import React from 'react'
import { RiHome2Line, RiShoppingCart2Line } from 'react-icons/ri'
import { MdOutlineNoteAlt } from 'react-icons/md'
import { GrRestaurant } from 'react-icons/gr'
import { Badge } from '@mui/material'

function Navbar() {
	return (
			<nav className="navbar sticky-bottom navbar-expand bg-success navigation">
				<nav className="container">
    			{/* <a className="navbar-brand" href="#">Navbar</a> */}
    			{/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
      			<span className="navbar-toggler-icon"></span>
    			</button> */}
      			<div className="container-fluid navbar navbar-nav collapse navbar-collapse">
        			<a className="nav-link" href="/"><h1><RiHome2Line/></h1>Home</a>
        			<a className="nav-link" href="/newrecord">
								{/* <Badge badgeContent={'+'} color="primary"> */}
									<h1><MdOutlineNoteAlt/></h1>
									{/* </Badge> */}
									Place Order
								</a>
        			<a className="nav-link" href="/record"><h1><RiShoppingCart2Line/></h1>Cart</a>
        			<a className="nav-link" href='/restaurants'><h1><GrRestaurant/></h1>Restaurants</a>
      			</div>
  			</nav>
			</nav>

	)
}

export default Navbar