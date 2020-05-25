import React, { Component } from 'react'
//aplicar estilos
import Navjs from '../Components/Navbar'
import Footer from '../Components/Footer'
import DispoCom from '../Components/DIsponiblescomponent'


export default class Disponibles extends Component {
    render() {
        return (

            <div className='contenedor_total'>
                <Navjs id='navibari'></Navjs>
                <div className='subBody'>
                    <div className='subsubbody2' >
                        <DispoCom></DispoCom>
                    </div>
                    <div className='keren'>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
