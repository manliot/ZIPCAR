import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import '../Styles/estiloDetalles2.css'

export default class CardplanComponent extends Component {
    render() {
        return (
            <div>
                <Card className="card_" border="info" style={{ width: '340px' }}>
                    <Card.Title>{this.props.nombre}</Card.Title>
                    <Card.Body>

                        <Card.Text >{this.props.precio}</Card.Text>
                        <Card.Text >{this.props.duracion}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
} 
