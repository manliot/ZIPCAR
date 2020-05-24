import React, { Component } from 'react'
import Cardc from '../Components/Cardplan'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import '../Styles/Home.css'

export default class Planes_card extends Component {
    constructor() {
        super()
        this.state = {
            planes: [],
        }
    }
    async componentDidMount() {
        const res = await axios.get('https://cioscar-backend.herokuapp.com/api/plan');
        this.setState({ planes: res.data });
        console.log(res.data)
    }
    render() {
        return (
            <div className='subsubbody'>
                <div>
                    <h1> </h1>
                </div>
                <Container className='box' style={{ marginRight: 100 }}>
                    <Row>
                        {this.state.planes.map((c) => {
                            return (
                                <Col>
                                    <Cardc nombre={c.nombre} duracion={c.duracion} precio={c.precio} ></Cardc>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}
