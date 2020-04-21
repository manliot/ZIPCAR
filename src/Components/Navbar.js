import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Container } from 'react-bootstrap';
import '../Styles/Navibar.css';

const NavigatorBar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Container fluid={true} >

                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Brand href="/"></Navbar.Brand><img src={require("../Images/LogoBordeOscuro.png")} height={70} width={75} ></img>
                    <Nav className="mr-auto">
                        <Nav.Link className="Nav-link" href="/QueesZipcar">¿Que es ZIPCAR?</Nav.Link>
                        <Nav.Link className="Nav-link" href="/">Home</Nav.Link>
                        <Nav.Link className="Nav-link" href="/Login">Login</Nav.Link>
                        <Nav.Link className="Nav-link" href="/Precios">Precios</Nav.Link>
                        <Nav.Link className="Nav-link" href="/Disponibles">Disponibles</Nav.Link>
                        <NavDropdown title="Servicios" id="basic-navbar-nav">
                            <NavDropdown.Item href="#action/3.1">Ciao Car</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Zipcar</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">CarterAPP</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Form>
                    <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                    <Button as="input" type="button" id="boton-buscar" placeholder="Buscar"></Button>{' '}
                </Form>
            </Container>
        </Navbar>
    )
}
export default NavigatorBar;