import React, { Component } from 'react'
//import '..Styles/RentarAuto.css'
import Dispo from '../Components/DIsponiblescomponent'
import Navjs from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/Home.css'
export default class RentarAuto extends Component {
    render() {
        return (
            <div className='contenedor_total'>
                <Navjs id='navibari'></Navjs>
                <div className='subBody'>
                    <div className='subsubbody2' >
                        < Dispo></Dispo>

                    </div>
                    <div className='keren'>
                        <Footer />
                    </div>
                </div>
            </div>



        )
    }
}
