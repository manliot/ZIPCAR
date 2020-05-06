import React, { Component } from 'react'
import Navjs from '../Components/Navbar'
//import CarouselImages from '../Components/Carousel'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import '../Styles/estiloDetalles2.css'
import { Container, Row, Col } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navjs ></Navjs>
                <div>
                </div>
                <div className='contenedor'>
                    <img src={require("../Images/efecto.png")} height={170} width={2000} id='imagenefecto' />
                    <div className="card-body">
                        <h1 className="text-center">¿Como funcionamos?</h1>
                    </div>
                    <Container >
                        <Row>
                            <Col>
                                <Card src="190524002834-20190524-boss-texting-super-tease.jpg" texto="Al unirte a nuestra comunidad, te enviaremos un 
                            correo si tu solicitud fue aprovada." height="100" />
                            </Col>
                            <div>
                            </div>
                            <Col>
                                <Card src="69325709-volante-icono-de-la-línea-del-vector-logotipo-de-carreras-de-coches-clases-de-conducir-firman-automóvil-i.jpg"
                                    texto="Cuando ya tengas las llaves en tus manos podras movilizarte en nuestros lujosos autos." />
                            </Col>
                            <div>
                            </div>
                            <Col>
                                <Card src="descarga.jpg" texto=" Cuando se termine el tiempo, se devolvera el auto en 
                            uno algun punto de entrega."/>
                            </Col>
                        </Row>

                    </Container>
                </div>
                <Footer />
            </div>
        )
    }
}

