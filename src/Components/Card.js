import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/estiloDetalles2.css'

export default class CardComponent extends Component {
    render() {
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src={this.props.src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.titulo}</h5>
                    <p className="card-text">{this.props.texto}</p>
                    <Link to="#" className="btn btn-primary">Go!</Link>
                </div>
            </div>
        )
    }
}
