import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown
} from "react-bootstrap";

import logo from "./logo-new.png";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="secondary">
        <Navbar.Brand href="#home"><img src={logo} height="50px" width="50px"/> <span style={{color:"white"}}> Jack n Jill Nursery School & Abacus </span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav >
            <Nav.Link href="#Home" >Home</Nav.Link>
            <Nav.Link href="#About">About Us</Nav.Link>
            <NavDropdown title="Academics" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Nursery School
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Abacus</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dance Class</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Art Class</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Contact">Contact Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
