import React, { Component } from 'react'
/* import '../Styles/estiloDetalles2.css'
 */import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default class CardComponent extends Component {
    render() {
        const CardComponentStyled = styled.div`
                .card {
                    border-width: 0px;
                    margin-top: 20px;
                    font-family: "Roboto";
                    display: flex;
                    align-items: center;
                    justify-content: center;
            }

            .card_ {
                margin-top: 20px;	
                font-family: "Roboto";
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .elsei {
                display: flex;
                justify-content: center;
            }

            .card-img-top {
                margin-top: 10px;
                width: 220px;
                height: 144px;
                margin-left: -20px;
            }

            .card-title {
                margin-top: 10px;
            }

            .h5t {}

            .card-body_ {
                padding-left: 10px;
                padding-right: 50px;
                flex: 1;
                padding-top: -10px;
                margin-top: 20px;
            }

            #imagenefecto {
                margin-left: -20px;
                margin-top: -5px;
            }

            .contenedor {
                margin-bottom: 50;
                display: inherit;
                justify-content: inherit;
                height: inherit;
                align-items: inherit;
                max-width: 1000px;
                flex: 1;
                margin: 0 auto;
                flex-wrap: inherit;
            }
        `
        return (
            <CardComponentStyled  style={{ width: '17rem', height: '24rem' }}>
                <img src={this.props.src} className="card-img-top" alt="..." />
                <div className="card-body_">
                    <h5 className="card-title">{this.props.titulo}</h5>
                    <p className="card-text">{this.props.texto}</p>                    
                    <a href="#" class="btn btn-primary">Mas informacion</a>                    
                </div>
            </CardComponentStyled>
        )
    }
}
