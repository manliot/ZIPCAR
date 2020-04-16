import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Container,Row,Col } from 'react-bootstrap';
import '../Styles/Navibar.css';

const NavigatorBar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Container fluid={true} >
                <Row>
                    <Col >
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link className="Nav-link" href="/QueesZipcar">¿Que es ZIPCAR?</Nav.Link>
                                <Nav.Link className="Nav-link" href="/">Home</Nav.Link>
                                <Nav.Link className="Nav-link" href="/Login">Login</Nav.Link>
                                <Nav.Link className="Nav-link" href="/Precios">Precios</Nav.Link>
                                <NavDropdown title="Servicios" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Ciao Car</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">Zipcar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">CarterAPP</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col >
                        <Navbar.Brand href="/"></Navbar.Brand><img src={require("../Images/LogoBordeOscuro.png")} height={70} width={70} ></img>
                    </Col>
                    <Col >
                        <Form inline>
                            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}
export default NavigatorBar;