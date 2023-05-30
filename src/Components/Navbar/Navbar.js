import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  return (
<Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='navbarparent'>
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#works">Works</Nav.Link>
           
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar