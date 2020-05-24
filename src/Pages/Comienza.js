import React, { Component } from 'react'

import Carousel from '../Components/Carousel'
import '../Styles/Comienza.css'
import '../Styles/Home.css'
export default class Registrate extends Component {
    render() {
        return (
            <div className="contenedorr">
                <div className="Parrafo_bienvenida">                    
                    <h1 className="h1" id="titulo">Vive una experiencia inimaginable con CiosCar!</h1>
                    <h2 className="h2">CiosCar es la plataforma de alquiler de autos mas usada en el mundo, contamos cientos de modelos para todos los gustos y estilos</h2>
                    <button className="button">Comenzar</button>
                </div>
                <div className="contenedor20">
                    <Carousel></Carousel>
                </div>
            </div>
        )
    }
}