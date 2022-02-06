import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {
  Link,
  useLocation
} from "react-router-dom";

function MainNav() {
  let location = useLocation();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand>Beerscapade</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="top-global-nav"/>
          <Navbar.Collapse id="top-global-nav">
            <Nav className="me-auto">
              <Nav.Link href="feed" active={location.pathname.startsWith('/feed')}>Feed</Nav.Link>
              <Nav.Link href="login" active={location.pathname.startsWith('/login')}>Login</Nav.Link>
              <Nav.Link href="register" active={location.pathname.startsWith('/register')}>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNav;
