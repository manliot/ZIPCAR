import React, { Component } from 'react'


import Carousel from '../Components/Carousel'

import '../Styles/Quees.css'
import { Container, Row, Col } from 'react-bootstrap'
export default class quee extends Component {
    render() {
        return (
            <div style={{ color: '#424242' }}>
                <div className="card-body2">
                    <h1 className="text-center" >¿Que es Cioscar?</h1>
                    <h2 className="h22">CiosCar es la plataforma de alquiler de autos mas usada en el mundo, contamos cientos de modelos para todos los gustos y estilos</h2>
                </div>
                <Container style={{ display: "flex", justifyContent: "center" }} >

                    <Row>
                        <Col>
                            <div className="Parrafo_bienvenida">
                               
                            </div>
                        </Col>
                        <Col className="contenedor20">
                            <Carousel></Carousel>
                        </Col>

                    </Row>

                </Container>
            </div>
        )
    }
}
