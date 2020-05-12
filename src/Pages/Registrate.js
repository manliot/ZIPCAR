import React, { Component } from 'react'
import Register from './Register'
import '../Styles/registrate.css'
export default class Registrate extends Component {
    render() {
        return (
            <div className="contenedorr">
                <div className="Parrafo_bienvenida">
                    <h1 className="h1"> Bienvenido a Cioscar</h1>
                    <h2 className="h2"> Movilizate por la ciudad de una manera agil, rapida y segura</h2>
                </div>
                <div className="contenedor2">
                    <Register className="registrate" />
                </div>
            </div>
        )
    }
}
