import React, { Component } from 'react'
//import '..Styles/RentarAuto.css'
import Precios from '../Components/precios_component'
import Navjs from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/Home.css'
export default class select_plan extends Component {
    render() {
        return (
            <div className='contenedor_total'>
                <Navjs id='navibari'></Navjs>
                <div className='subBody'>
                    <div className='subsubbody2' >
                        < Precios />
                    </div>
                    <div className='keren'>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}