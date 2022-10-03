import React from 'react'
import { Link } from 'react-router-dom'
import { GiFullPizza } from 'react-icons/gi'
import { MdOutlineRestaurant } from 'react-icons/md'
import Badge from '@mui/material/Badge';

function SearchBar() {
	return (
		<nav className="navbar navbar-light bg-light">
			<div><Link to='/'><img className='logo ' src={require(`../assets/pizza-logo.png`)} alt='Logo'/></Link></div>
			
  		{/* <form className="form-inline d-flex ml-auto">
    		<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    		<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  		</form> */}
			<div>
				<Link to={'/new-pizza'} className='nav-btns text-warning'>
					{/* <Badge badgeContent={'+'} color="primary"> */}
						<h1 className='my-auto'><GiFullPizza/></h1>
						New Pizza
    			{/* </Badge> */}
				</Link>
			</div>
			<div>
				<Link to={'/new-restaurant'} className='nav-btns '>
					{/* <Badge badgeContent={'+'} color="primary"> */}
						<h1 className='my-auto'><MdOutlineRestaurant/></h1>
						New Restaurant
					{/* </Badge> */}
				</Link>
			</div>
		</nav>
	)
}

export default SearchBar