import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../assets/home/logo.jpg'
import logo1 from '../assets/home/logo1.jpg'

export const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" bg="black" variant="dark" className="custom-navbar">
        <Container className="d-flex flex-column align-items-start align-items-lg-center justify-content-between">
          <div className="d-flex align-items-center justify-content-between w-100">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-lg-none" />
            <Navbar.Brand href="/" className="align-items-center mx-auto">
              <img 
                src={logo1} 
                alt="Logo" 
                className="d-inline-block align-top img-fluid custom-logo" 
              />
            </Navbar.Brand>
          </div>
          <Navbar.Collapse id="basic-navbar-nav" className="w-100">
            <Nav className="w-100 flex-column flex-lg-row align-items-lg-center justify-content-lg-center mt-3 mt-lg-0 text-start">
              <Nav.Link href="/servicios" className="mx-lg-2">Servicios</Nav.Link>
              <Nav.Link href="/sobremi" className="mx-lg-2">Sobre Mi</Nav.Link>
              <Nav.Link href="/contacto" className="mx-lg-2">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

