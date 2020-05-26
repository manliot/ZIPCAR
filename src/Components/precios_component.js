import React, { Component } from 'react'
import axios from 'axios';
import Cardc from '../Components/Cardplan'
import { Container, Row, Col } from 'react-bootstrap'
import '../Styles/Home.css'


export default class DIsponiblescomponent extends Component {
    constructor() {
        super()
        this.state = {
            planes: [],
        }
    }
    async componentDidMount() {
        const res = await axios.get('https://cioscar-backend.herokuapp.com/api/plan');
        this.setState({ planes: res.data });        
    }   
    llenarplan(c) {
        this.props.set_plan_selected(c)
        //alert(this.props.car_selected.placa)
    }
    render() {
        return (
            <div>
                <Container className='box' style={{ marginRight: 100 }}>
                    <Row>
                        {this.state.planes.map((c) => {
                            return (
                                <Col>
                                    <Cardc id={c._id} plan={c} nombre={c.nombre} duracion={c.duracion} precio={c.precio} ></Cardc>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}