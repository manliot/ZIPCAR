import React, { Component } from 'react'
import Navjs from '../Components/Navbar'
import CarouselImages from '../Components/Carousel'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import { Container, Row, Col } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navjs ></Navjs>
                <CarouselImages />
                <div className="container">
                    <h1></h1>
                    <h1>Como funcionamos</h1>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <Card src="190524002834-20190524-boss-texting-super-tease.jpg" texto="Al unirte a nuestra comunidad, te enviaremos un 
                            correo si tu solicitud fue aprovada." height="100" />

                        </Col>
                        <Col>
                            <Card src="69325709-volante-icono-de-la-línea-del-vector-logotipo-de-carreras-de-coches-clases-de-conducir-firman-automóvil-i.jpg" 
                            texto="Cuado ya tengas las llaves en tus manos podras movilizarte en nuestros lujosos autos."/>
                        </Col>
                        <Col>
                            <Card src="descarga.jpg" texto=" Cuando haya terminado su tiempo de uso, se devolvera el auto en 
                            uno de los diferentes puntos de entrega."/>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

