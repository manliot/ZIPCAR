import React, { Component } from 'react'
import Navjs from '../Components/Navbar'
import CarouselImages from '../Components/Carousel'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navjs/>
                <CarouselImages />
            </div>
        )
    }
}

