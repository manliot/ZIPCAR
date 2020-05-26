import React, { Component } from 'react'


import Carousel from '../Components/Carousel'

import '../Styles/Quees.css'
import { Container, Row, Col } from 'react-bootstrap'
export default class quee extends Component {
    render() {
        return (
            <div>
                <div className='three_colums'>
                    <div className="three_colums_column">
                        <h5 className="h5" >Cioscar es 100%</h5>
                        <p className='pepe'>Somo una de las plataformas <br/> de prestamo de vehiculos mas 
                        grandes del mundo; nustros productos son 100% seguros y confiables </p>
                    </div>
                    <div className="three_colums_column">
                        <h5 className="h5" >Cioscar tiene precios bajos</h5>
                        <p className='pepe'>Tenemos cientos de planes <br/>que se adaptan a las necesidades de nuestros clientes y una excelente relacion calidad precio</p>
                    </div>
                    <div className="three_colums_column2">
                        <h5 className="h5" >Cioscar es Eco-Friendly</h5>
                        <p className='pepe'>Sabemos que el planeta tierra <br/> necesita nuestra ayuda,<br/> por esta razon nuestros <br/> productos estan altamente calificados y asegurados para no contaminar al medio ambiente</p>
                    </div>

                </div>
                <Container style={{ display: "flex", justifyContent: "center" }} >

                    <Row>
                        <Col className="contenedor20">
                            <Carousel></Carousel>
                        </Col>

                    </Row>

                </Container>
            </div>
        )
    }
}
