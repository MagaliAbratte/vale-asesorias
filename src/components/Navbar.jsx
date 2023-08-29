import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
    <Navbar expand="lg" className='nav-total'>
      <Container className='nav-container'>
        <NavLink to={'/'} className='title-navbar'>VALENTINA ABALLAY</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <NavLink to={'./servicios'} className='link-navbar'>Servicios</NavLink>
              <NavLink to={'./sobremi'}  className='link-navbar'>Sobre Mi</NavLink>
              <NavLink to={'./contacto'}  className='link-navbar'>Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
