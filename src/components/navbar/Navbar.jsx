import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
 
} from "react-bootstrap";
import logo from "../../assets/png/icgc_logo.jpg";
import { Link } from "react-router-dom";
import "./styles.css";


function NavBar() {
  return (
    <Navbar className='px-5' bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Joy Temple
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="contact">
            Contact
          </Nav.Link>
          <NavDropdown title="Ministries" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="men">Men</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="women">Women</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="youth">Youth</NavDropdown.Item>
            
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
