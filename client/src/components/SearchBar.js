import React from 'react'

function SearchBar() {
	return (
		<nav className="navbar navbar-light bg-light">
			<h1>Logo</h1>
  		<form className="form-inline d-flex ml-auto">
    		<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    		<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  		</form>
		</nav>
	)
}

export default SearchBar