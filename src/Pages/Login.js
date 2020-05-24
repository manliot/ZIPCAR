import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Login.css';
import axios from 'axios';
import Footer from '../Components/Footer'
import Navjs from '../Components/Navbar'
import { connect } from 'react-redux';


//se importan las accion para poner el usuario logeado como estado global
import { Log_Usuario } from '../actions/acciones_usuario'
class Login extends Component {
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
        const contraseña = Number(this.state.contraseña)
        const DataUser = {
            usuario: this.state.usuario,
            contraseña: contraseña
        }
        const res = await axios.post(`https://cioscar-backend.herokuapp.com/api/verifyuser/`, DataUser);
        if (res.data.mensaje === "error usuario") {
            alert("usuario no encontrado");
        } else {
            if (res.data.mensaje === "succesfull") {
                this.props.set_User_log(DataUser.usuario)
                this.props.history.push('/')
                alert('Ingreso exitoso')
            } else {
                alert('contraseña incorrecta');
            }
        }
    }

    render() {
        return (
            <div className='contenedor_total'>
                <Navjs className='navis' ></Navjs>
                <div className="subBody">
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
                    <Footer id="footei"/>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return null
}
const mapDispathToProps = (dispath) => {
    return {
        set_User_log: (usuario) => {
            return dispath(Log_Usuario(usuario))
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Login);
