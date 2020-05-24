import React, { Component } from 'react'

export default class Rentar extends Component {
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
