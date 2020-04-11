import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div>
                <p>this is login Page</p>
                <Link to='/Home'> vamos a home</Link>
            </div>
        )
    }
}
