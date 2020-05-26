import React, { Component } from 'react'
import '../Styles/estiloDetalles2.css'
import { Link } from 'react-router-dom'

export default class CardComponent extends Component {
    render() {
        return (
            <div className="card" style={{ width: '17rem', height: '24rem' }}>
                <img src={this.props.src} className="card-img-top" alt="..." />
                <div className="card-body_">
                    <h5 className="card-title">{this.props.titulo}</h5>
                    <p className="card-text">{this.props.texto}</p>                    
                    <a href="#" class="btn btn-primary">Mas informacion</a>                    
                </div>
            </div>
        )
    }
}
