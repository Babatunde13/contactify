import {useState} from 'react'
import {
    Navbar, Nav
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
        href="/" 
        style={{cursor : 'pointer'}}>
          <img src="../assets/favicon.png" alt="" style={{width : '40px', height :  '40px'}} className="mr-2" /> 
          Password Manager
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <a href="/" className="mt-2" style={{textDecoration : "none"}}>Home</a>
          
          {/* {!localShrefrage.ge('userId')  ?  */}
          <>
          <a 
            title={<FontAwesomeIcon 
            icon={faUserCircle} 
            size="2x"
            className="text-primary" />} alignRight id="basic-nav-dropdown">
            <a href="api/auth/login" className="text-primary">Sign in</a>
            <a href="/api/auth/register" className="text-primary">Register</a>
          </a>
          </>
          <>
          <a title={<FontAwesomeIcon icon={faCog} size="2x" className="text-primary" />} alignRight id="basic-nav-dropdown">
            <a href="/dashboard" className="text-primary" >Dashboard</a>
            <a href="api/auth/logout" className="text-primary" >Logout</a>
          </a>
          </>
          {/* } */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent