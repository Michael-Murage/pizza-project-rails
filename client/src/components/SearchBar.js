import React from 'react'
import { Link } from 'react-router-dom'

function SearchBar() {
	return (
		<nav className="navbar navbar-light bg-light">
			<h1>Logo</h1>
  		{/* <form className="form-inline d-flex ml-auto">
    		<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    		<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  		</form> */}
			<div>
				<Link to={'/new-pizza'} className='nav-btns text-warning'>New Pizza</Link>
			</div>
			<div>
				<Link to={'/new-restaurant'} className='nav-btns mx-2'>New Restaurant</Link>
			</div>
		</nav>
	)
}

export default SearchBar