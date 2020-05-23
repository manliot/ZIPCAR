import React, { Component } from 'react'
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../Styles/Navibar.css';

import { connect } from 'react-redux'

class NavigatorBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div aria-controls="basic-navbar-nav"></div>
                    <Link className="navbar-brand" to="/">
                        <img src={require("../Images/LogoBordeOscuro.png")} height={70} width={75} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <NavDropdown title="Informacion" id="navbarDropdown">
                                    <NavDropdown.Item href="/QueesZipcar">Que es Cioscar</NavDropdown.Item>
                                    <NavDropdown.Item href="#comotrabajamos">¿Como Trabajamos?</NavDropdown.Item>
                                </NavDropdown>
                            </li>
                            <li className="nav-item">
                                <Link className="Nav-link" to="#precios">Precios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="Nav-link" to="/Disponibles">Disponibles</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <NavDropdown title="Servicios" id="navbarDropdown">
                                    <NavDropdown.Item href="https://github.com/manliot/ZIPCAR">Ciao Car</NavDropdown.Item>
                                    <NavDropdown.Item href="https://www.zipcar.com/">Zipcar</NavDropdown.Item>
                                    <NavDropdown.Item href="https://github.com/manliot/CarterApp">CarterAPP</NavDropdown.Item>
                                </NavDropdown>
                            </li>
                        </ul>
                        {this.props.usuarioLog === '' && (
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <Link className="Nav-link" to="/Login">Login</Link>
                                </li>
                            </ul>
                        )}
                        {this.props.usuarioLog !== '' && (
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <Link className="Nav-link" to="/Login">{this.props.usuarioLog} Log out</Link>
                                </li>
                            </ul>
                        )}

                    </div>
                </nav>
                <img src={require("../Images/efecto_2.png")} height={600} id='imagenefecto' alt="efecto" />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        usuarioLog: state.usuarioLog,
    }
}
export default connect(mapStateToProps)(NavigatorBar)