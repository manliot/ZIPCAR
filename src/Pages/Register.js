import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/register.css';
import axios from 'axios';

export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            nombre: "",
            apellido: "",
            usuario: "",
            contraseña: "",
            direccion: "",
            Cc: ""
        }
    }
    onChangeCc = (e) => {
        this.setState({
            Cc: e.target.value
        })
    }
    onChangeDireccion = (e) => {
        this.setState({
            direccion: e.target.value
        })
    }
    onChangeNombre = (e) => {
        this.setState({
            nombre: e.target.value
        })
    }
    onChangeApellido = (e) => {
        this.setState({
            apellido: e.target.value
        })
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
    /*  async componentDidMount() {
         const res = await axios.get('https://cioscar-backend.herokuapp.com/api/users/');
         this.setState({ users: res.data });
     } */
    onSubmitRegister = async e => {
        e.preventDefault();
        const { nombre, apellido, usuario, contraseña, direccion } = this.state
        const newusuario = {
            nombre,
            apellido,
            usuario,
            contraseña,
            direccion,

        }
        const res = await axios.post('https://cioscar-backend.herokuapp.com/api/users/', newusuario);
       // console.log(res.data.messge)
        if (res.data.messge === " Created user ") {
            alert("Registro exitoso")
            window.location.href = 'http://localhost:3000/'
        }else{
            alert("usuario existente")
        }

    }
    render() {
        return (            
                <div className="login-page" >
                    <div className="form">
                        <h2 className="fs-title">Registrate</h2>
                        <form className="login-form" onSubmit={this.onSubmitRegister}>
                            <input type="text" placeholder="Nombre" onChange={this.onChangeNombre} />
                            <input type="text" placeholder="Apellido" onChange={this.onChangeApellido} />
                            <input type="text" placeholder="Usuario" onChange={this.onChangeUsuario} />
                            <input type="password" placeholder="Contraseña" onChange={this.onChangeContraseña} />
                            <input type="text" placeholder="Direccion" onChange={this.onChangeDireccion} />
                            <button type="submit">Register</button>
                            <p className="message">Ya estas registrado <Link to="/Login">Log in</Link></p>
                        </form>
                    </div>
                </div>          
        )
    }
}
