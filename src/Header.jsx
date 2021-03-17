import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Jack N Jill School</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About Us</Nav.Link>
            <NavDropdown title="Academics" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Nursery School
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Abacus</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dance Class</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Art Class</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#Contact">Contact Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
