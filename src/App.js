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
import RentarAuto from './Pages/RentarAuto'
/* 
=================================================================================
En este archivo se definen todas las rutas de la siguiente manera;
    si quiero ir a x ruta
        1.importo el componente   (react component) 
            import NameComponent from './ubicacion del js de xcomponent' 
        2.defino de la siguiente manera que renderizar cuando visite tal ruta /x
            <Route exact path='/x' component={NameComponent}
===================================================================================
*/
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
                    <Route exact path="/RentarAuto" component={RentarAuto} />
                    <Route component={NFPage}/>                   
                </Switch>
            </BrowserRouter>
        )
    }
}  
