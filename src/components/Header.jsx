import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser } from 'react-icons/fa'
// import logo from '../assets/logo.png'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
  return (
   <header>
    <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand >
          <img src={logo} alt="Arta"/>
          Arta
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
            <LinkContainer to='/Projects'>
              <Nav.Link >
                <FaShoppingCart/> Projects
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/Aboutme'>
              <Nav.Link>
                <FaUser/> About me
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </header>
  )
}

export default Header
