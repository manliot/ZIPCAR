import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import '../Styles/estiloDetalles2.css'


import { connect } from 'react-redux'

//actions
import { Car_selector } from '../actions/acciones_car'

class CardcarComponent extends Component {
       
    llenarcar() {
        this.props.set_car_selected(this.props.placa)
        alert(this.props.car_selected)
    }
    render() {
        return (
            <div onClick={this.llenarcar.bind(this)}>
                <Card className="card" border="info" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.src} />

                    <Card.Title className="text-center">{this.props.modelo}</Card.Title>
                    <Card.Text className="text-center">{this.props.marca}</Card.Text>
                    <Card.Text className="text-center">{this.props.modelo}</Card.Text>
                    <Card.Text className="text-center">{this.props.color}</Card.Text>
                    <Card.Text className="text-center">{this.props.año}</Card.Text>

                    <Card.Body>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        usuarioLog: state.usuarioLog,
        car_selected: state.car_selected
    }
}
const mapDispathToProps = (dispath) => {
    return {
        set_car_selected: (car) => {
            return dispath(Car_selector(car))
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(CardcarComponent)