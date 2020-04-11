import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'


export default class App extends Component {
    render() {
        //añadir el notfound page
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Login" component={Login} />
                  
                </Switch>


            </BrowserRouter>
        )
    }
}  
