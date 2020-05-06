import React, { Component } from 'react'
//aplicar estilos
import axios from 'axios';
import Cardc from '../Components/cartcard'
import Navjs from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Container, Row, Col } from 'react-bootstrap'

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
            <div>
                <Navjs ></Navjs>
              <Container>
                <Row>
                    {this.state.cars.map((c) => {
                        return (

                            <Col>
                                <Cardc  modelo={c.modelo} marca={c.marca} color={c.color} año={c.año} src={c.nombreImagen}></Cardc>
                            </Col>

                        )
                    })}
                </Row>
               </Container >
               <Footer/>
         </div>
        )
    }
}