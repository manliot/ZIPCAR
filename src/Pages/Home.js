import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <p>this is home Page</p>
                <Link to='/Login'> vamos a Login</Link>
            </div>
        )
    }
}

