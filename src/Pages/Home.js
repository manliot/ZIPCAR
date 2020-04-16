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
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur placeat dolorum nulla,
                    deserunt optio iste! Harum amet quas reiciendis,
                    asperiores consequuntur repellat quos architecto minus
                           possimus atque suscipit veritatis est!</h1>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <Card src="https://www.mazda.com.co/link/e87723b08aa2476c89b7463e679e0e2c.aspx" />
                        </Col>
                        <Col>
                            <Card src="https://static.carroya.com/vehiculos/1801159/1801159_1_w.jpg" />
                        </Col>
                        <Col>
                            <Card src="https://i.pinimg.com/originals/20/8b/8b/208b8b0a0296743445a9e7e4c035b36d.png" />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

