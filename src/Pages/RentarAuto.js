import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import '..Styles/RentarAuto.css'
import Rentar from './Rentar'
import Dispo from '../Components/DIsponiblescomponent'
import Navjs from '../Components/Navbar'
import '../Styles/Home.css'
export default class RentarAuto extends Component {
    render() {
        return (
            <div>
                <Navjs id='navibari' ></Navjs>
                < Dispo></Dispo>
                
            </div>
        )
    }
}
