import React, { Component } from 'react'
import axios from 'axios';
import Cardc from '../Components/cartcard'
import { Container, Row, Col } from 'react-bootstrap'
import '../Styles/Home.css'

export default class DIsponiblescomponent extends Component {
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
            <div>
                <Container className='box' >
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
            </div>
        )
    }
}
