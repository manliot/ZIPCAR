import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
export default class Carouseli extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>   
                         <img style={{'height':"328px", 'weight':"100%"}}  
                            className="d-block w-100"
                            src="yomequedoencasa.png"
                            alt="#YoMeQuedoEnCasa"
                        />
                        <Carousel.Caption>
                            <h3>#YoMeQuedoEnCasa</h3>
                            <h3>#Uninorte</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img style={{'height':"328px" , 'weight':"100%"}} 
                            className="d-block w-100"
                            src="uno.jpg"
                            alt="zipcar"
                        />
                    </Carousel.Item>
                   
                   
                </Carousel>
            </div>
        )
    }
}
