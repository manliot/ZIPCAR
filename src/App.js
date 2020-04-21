import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

//scenes
import Login from './Pages/Login'
import Home from './Pages/Home'
import NFPage from './Pages/NotFoudPage'
import C from './Components/cartcard'
import Register from './Pages/Register'
import Disponibles from './Pages/Disponibles'

export default class App extends Component {
    render() {
   
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Register" component={Register} />
                    <Route exact path="/c" component={C} />
                    <Route exact path="/Disponibles" component={Disponibles} />
                    <Route component={NFPage}/>                   
                </Switch>
            </BrowserRouter>
        )
    }
}  
