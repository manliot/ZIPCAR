import React, { Component } from 'react'
//aplicar estilos
import axios from 'axios';
import Cardc from '../Components/cartcard'
import { Container, Row, Col } from 'react-bootstrap'
import Navjs from '../Components/Navbar'
export default class Disponibles extends Component {
    constructor() {
        super()
        this.state = {
            cars: [],
        }
    }

    async componentDidMount() {
        const res = await axios.get('https://cioscar-backend.herokuapp.com/api/cars/');
        this.setState({ cars: res.data });
        console.log(res.data)
    }

    render() {
        return (
            <Container>
                <Navjs />
                <Row>
                    {this.state.cars.map((c) => {
                        return (

                            <Col>
                                <Cardc modelo={c.modelo} marca={c.marca} color={c.color} año={c.año} src={c.nombreImagen}></Cardc>
                            </Col>

                        )
                    })}
                </Row>
            </Container >
        )
    }
}