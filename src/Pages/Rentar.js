import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Rentar extends Component {
    onSubmit= async e => {

    }
    render() {
        return (
            <div class="login-page">
                <div class="form">

                    <form class="login-form" onSubmit={this.onSubmit}>
                        <input type="text" placeholder="username< no se mostrara" />
                        <input type="password" placeholder="fecha inicio" />
                        <input type="password" placeholder="fecha fin" />
                        <input type="password" placeholder="carro" />
                        <input type="password" placeholder="id reserva < no se mostrara" />
                        <button type="submit">Renta ahora</button>
                        <p class="message">Not registered? <Link href="/Register">Create an account</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}
