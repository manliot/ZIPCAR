import React, { Component } from 'react'
import Register from './Register'
import '../Styles/registrate.css'
export default class Registrate extends Component {
    render() {
        return (
            <div className="contenedor">
                <p className="h1"> BIenvenido a Cioscar</p>
               <div className="contenedor2">
                  <Register className="registrate"/>               
                </div> 
            </div>
        )
    }
}
