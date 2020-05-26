import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import '../Styles/estiloDetalles2.css'
import { connect } from 'react-redux'
import { Plan_selector } from '../actions/acciones_plan'
import { Link } from 'react-router-dom';

class CardplanComponent extends Component {
    llenarplan() {
        this.props.set_plan_selected(this.props.plan)
        alert(this.props.plan_selected)
    }
    render() {
        return (
            <div >
                <Card onClick={this.llenarplan.bind(this)} className="card_" border="info" style={{ width: '340px' }}>
                    {this.props.usuarioLog === '' && (
                        <div>
                            <Card.Title>{this.props.nombre}</Card.Title>
                            <Card.Body>
                                <Card.Text >{this.props.precio}</Card.Text>
                                <Card.Text >{this.props.duracion}</Card.Text>
                            </Card.Body>
                        </div>
                    )}
                    {this.props.usuarioLog !== '' && (
                        <Link to="/Rentar">
                            <Card.Title>{this.props.nombre}</Card.Title>
                            <Card.Body>
                                <Card.Text >{this.props.precio}</Card.Text>
                                <Card.Text >{this.props.duracion}</Card.Text>
                            </Card.Body>
                        </Link>
                    )
                    }
                </Card>
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