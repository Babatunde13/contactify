import {
    Navbar, Nav, Button
} from 'react-bootstrap'
import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import CreateContactModal from './CreateContact.modal'
import { useState } from 'react';

const NavbarComponent = (props) => {
  const {user} = useUser()
  const [createModalShow, setCreateModalShow] = useState(false);
  const handleHide = () => {
    let n = window.confirm("Your changes won't be saved...")
    if (n) setCreateModalShow(false)
  }
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className="mx-2 mx-md-4" href="/">Contact Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="d-lg-flex justify-content-end" id="responsive-navbar-nav">
        {user && <>
              <Button variant="primary" onClick={() => setCreateModalShow(true)}>
                Create New Contact
              </Button>
              <CreateContactModal
                show={createModalShow}
                onHide={handleHide}
                onCreate ={(payload) => {props.onCreate(payload); setCreateModalShow(false)}}
              />
            </>
          }
          {!user ? 
            <Nav.Link className="text-light" href="api/auth/login">Sign In </Nav.Link> : 
            <>
              <Nav.Link className="text-light" href="api/auth/logout">Sign Out</Nav.Link>
              <Nav.Link href="/profile">
                <Image loader={myLoader} src={user.picture} width="35" height="35" className="rounded-circle" />
              </Nav.Link>
            </>
          }
      </Navbar.Collapse>
    </Navbar>
  )
}

const myLoader=({src})=>{
  return src;
}

export default NavbarComponent