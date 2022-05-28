import React from 'react'
import { Navbar, Nav, Container} from "react-bootstrap"
import { Link } from "react-router-dom"
import Logo from '../../images/logo.png'

const Navbar1 = () => {
  return (
    <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="/"><Link to="/"><img src={Logo} alt="logo" /></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className='mx-auto'>
      <Nav className="ms-auto">
        <Link to="/aboutus" className='nav-link'>ABOUT US</Link>
        <Link to="/stories" className='nav-link'>STORIES</Link>
        <Link to="/contact" className='nav-link'>CONTACT</Link>
        <Link to="/login" className='nav-link'>LOG IN</Link>
        <Link to="/signup" className='nav-link btn' style={{background:"#FF5C00"}}>SIGN UP</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navbar1