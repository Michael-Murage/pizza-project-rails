import React from 'react'
import { RiHome2Line, RiSearchLine, RiShoppingCart2Line } from 'react-icons/ri'
import { MdOutlineNoteAlt } from 'react-icons/md'

function Navbar() {
	return (
			<nav className="navbar sticky-bottom navbar-expand bg-success">
				<div className="container-fluid">
    			{/* <a className="navbar-brand" href="#">Navbar</a> */}
    			{/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
      			<span className="navbar-toggler-icon"></span>
    			</button> */}
      			<div className="navbar navbar-nav collapse navbar-collapse">
        			<a className="nav-link" href="/"><h1><RiHome2Line/></h1></a>
        			<a className="nav-link" href="/search"><h1><RiSearchLine/></h1></a>
        			<a className="nav-link" href="/"><h1><RiShoppingCart2Line/></h1></a>
        			<a className="nav-link" href='/'><h1><MdOutlineNoteAlt/></h1></a>
      			</div>
  			</div>
			</nav>

	)
}

export default Navbar