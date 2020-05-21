import React, { Component } from 'react'
import Register from './Register'
//import Register from '../Components/Carousel'
import '../Styles/registrate.css'
export default class Registrate extends Component {
    render() {
        return (
            <div className="contenedorr">
                <div className="Parrafo_bienvenida">                    
                    <h1 className="h1" id="titulo"> Vive una experiencia inimaginable con CiosCar!</h1>
                    <h2 className="h2">CiosCar es la plataforma de alquiler de autos mas usada en el mundo, contamos cientos de modelos para todos los gustos y estilos</h2>
                </div>
                <div className="contenedor2">
                    <Register className="registrate" />
                </div>
            </div>
        )
    }
}
