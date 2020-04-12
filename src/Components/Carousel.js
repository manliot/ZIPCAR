import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
export default class Carouseli extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://uninorte.edu.co/documents/10162/15243862/banner-yo-me+quedo-en-casa.png/3b283449-2f38-4b85-a5b8-2fa17666a459?t=1584649742253"
                            alt="#YoMeQuedoEnCasa"
                        />
                        <Carousel.Caption>
                            <h3>#YoMeQuedoEnCasa</h3>
                            <h3>#Uninorte</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="uno.jpg"
                            alt="zipcar"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        )
    }
}
