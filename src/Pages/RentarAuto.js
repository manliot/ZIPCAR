import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import '..Styles/RentarAuto.css'

export default class RentarAuto extends Component {
    render() {
        return (
            <div class="login-page">
                <div class="form">
                    <form class="register-form">
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p class="message">Already registered? <Link to="/Login">Sign In</Link></p>
                    </form>
                    <form class="login-form">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button>login</button>
                        <p class="message">Not registered? <Link href="/Register">Create an account</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}
