import React from 'react'
import { Nav} from "react-bootstrap"
import { Link } from "react-router-dom"


const Navbar2 = () => {
  return (
    <>
        <Nav className="d-flex justify-content-center">
        <Link to="/aboutus" className='nav-link'>MARKET PLACE</Link>
        <Link to="/stories" className='nav-link'>WHOLESALE CENTER</Link>
        <Link to="/contact" className='nav-link'>SELLER CENTER</Link>
        <Link to="/login" className='nav-link'>SERVICES</Link>
        <Link to="/login" className='nav-link'>INTERSHIP</Link>
        <Link to="/login" className='nav-link'>EVENT</Link>

      </Nav>
    </>
  )
}

export default Navbar2