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
                            src="100.png"
                            alt="#Y100"
                        />                    
                    </Carousel.Item>
                    <Carousel.Item>
                    <img style={{'height':"328px" , 'weight':"100%"}} 
                            className="d-block w-100"
                            src="precios_bajos.gif"
                            alt="zipcar"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img style={{'height':"328px" , 'weight':"100%"}} 
                            className="d-block w-100"
                            src="eco.png"
                            alt="zipcar"
                        />
                    </Carousel.Item>
                   
                   
                </Carousel>
            </div>
        )
    }
}
