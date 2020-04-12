import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';
import '../Styles/Navibar.css';

const NavigatorBar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">ZIPCAR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/Login">¿Que es ZIPCAR?</Nav.Link>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Login">Login</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavigatorBar;