import {
    Navbar, Nav
} from 'react-bootstrap'
import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';

const NavbarComponent = (props) => {
  const {user, error, isLoading} = useUser()
  console.log(user)
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Contact Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {user && <Nav.Link href="/dashboard">Dashboard</Nav.Link>}
          {user && <Nav.Link href="/profile">Profile</Nav.Link>}
            {!user ? 
              <Nav.Link className="mr-auto" href="api/auth/login">Sign In </Nav.Link> : 
              <>
                <Nav.Link className="mr-auto" href="api/auth/logout">Sign Out</Nav.Link>
                <Nav.Link className="mr-auto" href="#">
                  {/* <Image src={user.picture} width="50" height="50" style={{backgroundRadius: '50%'}} /> */}
                </Nav.Link>
              </>
            }
        </Nav>
      </Navbar.Collapse>
</Navbar>
  )
}

export default NavbarComponent