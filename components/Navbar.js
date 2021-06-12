import {
    Navbar, Nav
} from 'react-bootstrap'
import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';

const NavbarComponent = () => {
  const {user} = useUser()

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className="mx-2 mx-md-4" href="/">Contact Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="d-lg-flex justify-content-end" id="responsive-navbar-nav">
          {!user ? 
            <>
              <Nav.Link className="text-light" href="api/auth/login">Sign In </Nav.Link> : 
            <Image alt="avatar" loader={myLoader} src={`https://ui-avatars.com/api/?background=random&name=John+Doe`} width="35" height="35" className="rounded-circle" />
            </> :
            <>
              <Nav.Link className="text-light" href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link className="text-light" href="api/auth/logout">Sign Out</Nav.Link>
              <Nav.Link href="/profile">
                <Image alt="avatar" loader={myLoader} src={user.picture || `https://ui-avatars.com/api/?background=random&name=${firstName}+${lastName}`} width="35" height="35" className="rounded-circle" />
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