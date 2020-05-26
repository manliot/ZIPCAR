import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux'
import '../Styles/Login.css';

class Rentar extends Component {
    onSubmit = async e => {
        e.preventDefault();
        const renta = {
            fecha_inicio: "14 03 2017 14:10:20.391",
            fecha_fin: "15 03 2017 14:10:20.391",
            usuario: this.props.usuarioLog,
            car: this.props.car_selected.placa,
        }
        const res = await axios.post(`https://cioscar-backend.herokuapp.com/api/reservas/`, renta);
        if (res.data.messge === ' Created reserva') {
            alert('listo, operacion exitosa, gracias por preferirnos!')
        } else {
            alert('revise los datos operación fallida', res.data.messge)
        }
    }
    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={this.onSubmit}>
                        <input type="text" placeholder={this.props.usuarioLog} />
                        <input type="password" placeholder="fecha inicio" />
                        <input type="password" placeholder="fecha fin" />
                        <input type="password" placeholder={this.props.car_selected.placa} />
                        <input type="password" placeholder="id reserva < no se mostrara" />
                        <button type="submit">Renta ahora</button>
                        <p className="message">Not registered? <Link to="/Register">Create an account</Link></p>
                    </form>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        usuarioLog: state.usuarioLog,
        car_selected: state.car_selected,
        plan_selected: state.plan_selected
    }
}

export default connect(mapStateToProps)(Rentar)
