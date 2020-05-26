import React, { Component } from 'react'
import Card from '../Components/Card'

import { Container, Row, Col } from 'react-bootstrap'
export default class ComoFuncionamos extends Component {
    render() {
        return (
            <div >
                <div className="card-body">
                    <h1 className="text-center">¿Como funciona Cioscar?</h1>
                </div>
                <Container style={{ display:"flex", justifyContent:"center"}} >
                    <Row>
                        <Col>
                            <Card src="190524002834-20190524-boss-texting-super-tease.jpg" texto="Al unirte a nuestra comunidad, te enviaremos un 
                            correo si tu solicitud fue aprovada." height="100" />
                        </Col>
                        <Col>
                            <Card src="69325709-volante-icono-de-la-línea-del-vector-logotipo-de-carreras-de-coches-clases-de-conducir-firman-automóvil-i.jpg"
                                texto="Cuando ya tengas las llaves en tus manos podras movilizarte en nuestros lujosos autos." />
                        </Col>
                        <Col>
                            <Card src="descarga.jpg" texto=" Cuando se termine el tiempo, se devolvera el auto en 
                            uno algun punto de entrega."/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
