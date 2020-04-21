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
                <Navjs />
                <CarouselImages />
                <div className="container">
                    <h1></h1>
                    <h1>Nuestros modelos</h1>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <Card src="noticiasel-nuevo-mazda3.jpg" titulo="holabebe" texto="que mas puesh" height="100" />

                        </Col>
                        <Col>
                            <Card src="1801159_1_w.jpg" />
                        </Col>
                        <Col>
                            <Card src="208b8b0a0296743445a9e7e4c035b36d.png" />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

