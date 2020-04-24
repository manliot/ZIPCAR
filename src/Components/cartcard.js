import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import '../Styles/estiloDetalles2.css'

export default class CardcarComponent extends Component {
    render() {
        return (
            <div>
                <Card border="info" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.src} />
                    <Card.Title>{this.props.modelo}</Card.Title>
                    <Card.Text >{this.props.marca}</Card.Text>
                    <Card.Text >{this.props.modelo}</Card.Text>
                    <Card.Text >{this.props.color}</Card.Text>
                    <Card.Text >{this.props.año}</Card.Text>
                    <Card.Body>
                    </Card.Body>
                </Card>
            </div>
        )
    }
} 
