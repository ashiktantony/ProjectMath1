import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown,NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Headerbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
  <Navbar.Brand href="/mathonedemo2">MathsOne</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <NavDropdown title="About Us" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/mathonedemo2/history">History</NavDropdown.Item>
        <NavDropdown.Item href="/mathonedemo2/vision"> Vision</NavDropdown.Item>
        <NavDropdown.Item href="/mathonedemo2/mission">Mission</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/mathonedemo2/Products">Products</Nav.Link>
      <NavDropdown title="Careers" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/mathonedemo2/careers/Vaccancy">Vaccancy</NavDropdown.Item>
        <NavDropdown.Item href="/mathonedemo2/careers/Registration"> Registration</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        )}
}
