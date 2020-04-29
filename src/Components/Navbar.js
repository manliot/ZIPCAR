import React, { Component } from 'react'
import {  NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../Styles/Navibar.css';


export default class NavigatorBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg ">
                    <div aria-controls="basic-navbar-nav"></div>
                    <Link className="navbar-brand" to="#">
                        <img src={require("../Images/LogoBordeOscuro.png")} height={70} width={75} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="Nav-link" to="/QueesZipcar">¿Que es ZIPCAR? <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="Nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="Nav-link" to="/RentarAuto">Precios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="Nav-link" to="/Disponibles">Disponibles</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <NavDropdown title="Servicios" id="navbarDropdown">
                                    <NavDropdown.Item href="#action/3.1">Ciao Car</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">Zipcar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">CarterAPP</NavDropdown.Item>
                                </NavDropdown>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" id='boton-buscar' type="submit">Buscar</button>
                        </form>
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="Nav-link" to="/Login">Login</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="Nav-link" to="/Login">Join</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}