import React, { Component } from 'react'
import Navjs from '../Components/Navbar'

import '../Styles/Home.css'
import PlanesBox from '../Components/Planes_card'
export default class Precios extends Component {

    render() {
        return (
            <div className="contenedor_total">
                <Navjs id='navibari' ></Navjs>
                <div className="subBody" >
                    <PlanesBox/>
                </div>
            </div>
        )
    }
}

