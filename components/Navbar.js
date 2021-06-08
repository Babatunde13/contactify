import {useState} from 'react'
import {
    Navbar, Nav, NavDropdown
} from 'react-bootstrap'
// import favicon from '../assets/favicon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCog } from '@fortawesome/free-solid-svg-icons'

const NavbarComponent = (props) => {

  return (
    <Navbar 
      expand="lg" 
      className="navbar-fixed-top" 
      style={{position : "sticky", top : "0", zIndex: "10000", backgroundColor : "#d1e1f0e7"}}
    >
      <Navbar.Brand 
        to="/" 
        style={{cursor : 'pointer'}}>
          <img src="../assets/favicon.png" alt="" style={{width : '40px', height :  '40px'}} className="mr-2" /> 
          Password Manager
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <a to="/" className="mt-2" style={{textDecoration : "none"}}>Home</a>
          
          {/* {!localStorage.getItem('userId')  ?  */}
          <>
          <NavDropdown 
            title={<FontAwesomeIcon 
            icon={faUserCircle} 
            size="2x" 
            className="text-primary" />} alignRight id="basic-nav-dropdown">
            <NavDropdown.Item to="/login" className="text-primary">Sign in</NavDropdown.Item>
            <NavDropdown.Item to="/register" className="text-primary">Register</NavDropdown.Item>
          </NavDropdown>
          </>
          <>
          <NavDropdown title={<FontAwesomeIcon icon={faCog} size="2x" className="text-primary" />} alignRight id="basic-nav-dropdown">
            <NavDropdown.Item to="/dashboard" className="text-primary" >Dashboard</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item to="/logout" className="text-primary" >Logout</NavDropdown.Item>
          </NavDropdown>
          </>
          {/* } */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent