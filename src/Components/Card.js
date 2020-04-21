import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export default class CardComponent extends Component {
    render() {
        return (
            <div>
                <Card border="info" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.src }/>
                    <Card.Title>{this.props.titulo}</Card.Title>
                    <Card.Text >{this.props.texto}</Card.Text>
                    <Card.Body>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
