import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
export default class Carouseli extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>   
                         <img style={{'height':"500px", 'weight':"100px"}}  
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
                    <img style={{'height':"500px" , 'weight':"100px"}} 
                            className="d-block w-100"
                            src="kia_niro_emotion_2019_a.jpg"
                            alt="zipcar"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img style={{'height':"500px" , 'weight':"10px"}} 
                            className="d-block w-100"
                            src="carro-hibrido-900x500.jpg"
                            alt="zipcar"
                        />
                    </Carousel.Item>
                    <img style={{'height':"500px" , 'weight':"10px"}} 
                            className="d-block w-100"
                            src="above-the-fold.jpg"
                            alt="zipcar"
                        />
                </Carousel>
            </div>
        )
    }
}
