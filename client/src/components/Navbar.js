import React from 'react'
import { RiHome2Line, RiSearchLine, RiShoppingCart2Line } from 'react-icons/ri'
import { MdOutlineNoteAlt } from 'react-icons/md'

function Navbar() {
	return (
			<nav className="navbar sticky-bottom navbar-expand bg-success">
				<nav className="container">
    			{/* <a className="navbar-brand" href="#">Navbar</a> */}
    			{/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
      			<span className="navbar-toggler-icon"></span>
    			</button> */}
      			<div className="container-fluid navbar navbar-nav collapse navbar-collapse">
        			<a className="nav-link" href="/"><h1><RiHome2Line/></h1></a>
        			<a className="nav-link" href="#top"><h1><RiSearchLine/></h1></a>
        			<a className="nav-link" href="/"><h1><RiShoppingCart2Line/></h1></a>
        			<a className="nav-link" href='/'><h1><MdOutlineNoteAlt/></h1></a>
      			</div>
  			</nav>
			</nav>

	)
}

export default Navbar