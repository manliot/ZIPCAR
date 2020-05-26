import React, { Component } from 'react'
import Navjs from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/estiloDetalles2.css'
import { Container, Row, Col } from 'react-bootstrap'
import Cardc from '../Components/cartcard'

export default class PagUser extends Component {
    constructor() {
        super()
        this.state = {
            reservas: [],
        }
    }

    async componentDidMount() {
        const res = await axios.get('https://cioscar-backend.herokuapp.com/api/reservas/');
        this.setState({ reservas: res.data });
    }

    render() {
        return (
            <div className='contenedor_total'>
                <Navjs id='navibari'></Navjs>
                <Container className='box' >
                    {this.props.usuarioLog !== '' && (
                        <Row>
                            {this.state.reservas.map((c) => {
                                if (this.props.usuarioLog == c.usuario) {
                                    return (
                                        <Col>
                                        this.state.reservas
                                            <Cardc key={c.placa} carro={c} modelo={c.modelo} marca={c.marca} color={c.color} año={c.año} src={c.nombreImagen} placa={c.placa}></Cardc>
                                        </Col>)
                                }
                            }
                            )
                            })}
                        </Row>
                    )}
                </Container >
                <Footer />
            </div>
        )
    }
}