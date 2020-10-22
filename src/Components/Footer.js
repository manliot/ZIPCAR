import React, { Component } from 'react'
import styled from 'styled-components'
import '../Styles/footer.css';

export default class Footer extends Component {
    
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="contain">
                        <div className="col">
                            <h1>Compañia</h1>
                            <ul>
                                <li>Acerca de Cios Car</li>
                                <li>Mision</li>
                                <li>Otros Servicios</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h1>Productos</h1>
                            <ul>
                                <li>Cios Car</li>
                                <li>ZipCar</li>
                                <li>CarterAPP</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h1>Soporte</h1>
                            <ul>
                                <li>Contáctanos</li>
                                <li>Chat WhatsApp</li>
                            </ul>
                        </div>
                        <div className="col social">
                            <h1>Social</h1>
                            <ul>
                                <li><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-128.png" style={{ width: '2vw', height: '2vw' }} alt="" /></li>
                                <li><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png" style={{ width: '2vw', height: '2vw' }} alt="" /></li>
                                <li><img src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/gmail-512.png" style={{ width: '2vw', height: '2vw' }} alt="" /></li>

                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>

        )
    }
}
