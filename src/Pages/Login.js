import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Login.css';
import axios from 'axios';
import Footer from '../Components/Footer'
import Navjs from '../Components/Navbar'
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            usuario: "",
            contraseña: "",
        }
    }
    onChangeUsuario = (e) => {
        this.setState({
            usuario: e.target.value
        })
    }
    onChangeContraseña = (e) => {
        this.setState({
            contraseña: e.target.value
        })
    }
   
    onSubmitLogin = async e => {
        e.preventDefault();
        const contraseña=Number(this.state.contraseña)
        const body={
            "contraseña":contraseña
        }
        const res = await axios.get(`https://cioscar-backend.herokuapp.com/api/verifyuser/${this.state.usuario}`, {params:body});
     
        console.log(res.data.mensaje)
        console.log(contraseña)
        if(res.data.mensaje==="error usuario"){
            alert("usuario no encontrado");
        }else{
            if (res.data.mensaje==="succesfull"){
                alert('Ingreso exitoso')
            }else{
                alert('contraseña incorrecta');
                    
            }
        }
    }
    render() {
        return (
            <div>
                <Navjs ></Navjs>
                <div className="login-page" >
                    <div className="form">
                        <h2 className="fs-title">Ingresa</h2>
                        <form className="login-form" onSubmit={this.onSubmitLogin}>
                            <input type="text" placeholder="Usuario" onChange={this.onChangeUsuario} />
                            <input type="password" placeholder="Contraseña" onChange={this.onChangeContraseña} />
                            <button type="submit">login</button>
                            <p className="message">No estas registrado?<Link to="/Register">Crea una cuenta</Link></p>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
