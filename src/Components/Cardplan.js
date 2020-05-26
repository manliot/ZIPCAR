import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import '../Styles/estiloDetalles2.css'
import { Plan_selector } from '../actions/acciones_plan'
import { connect } from 'react-redux'
import renta from '../Pages/Rentar'

 class CardplanComponent extends Component {
    llenarplan() {
        this.props.set_plan_selected(this.props.placa)
        alert(this.props.plan_selected)
    }
    render() {
        return (
            <div>
                <div onClick={this.llenarplan.bind(this)}>
                    <Card className="card_" border="info" style={{ width: '340px' }}>
                        <Card.Title>{this.props.nombre}</Card.Title>
                        <Card.Body>

                            <Card.Text >{this.props.precio}</Card.Text>
                            <Card.Text >{this.props.duracion}</Card.Text>
                        </Card.Body>
                    </Card>
                    <renta></renta>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        usuarioLog: state.usuarioLog,
        plan_selected: state.plan_selected
    }
}
const mapDispathToProps = (dispath) => {
    return {
        set_plan_selected: (plan) => {
            return dispath(Plan_selector(plan))
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(CardplanComponent)