import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export default class CardComponent extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.src} />
                    <Card.Body>
                        <Card.Title>Mazda ñao</Card.Title>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Pariatur placeat dolorum nulla,
                            deserunt optio iste! Harum amet quas reiciendis,
                            asperiores consequuntur repellat quos architecto minus
                            possimus atque suscipit veritatis est!
                         </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
