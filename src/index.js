/**
 *********************************************************
 Este archivo contiene lo que se va a mostrar (App.js)
 que contien todas las rutas de nuestra pagina.
 ve a app.js y notaras que al iniciar se muestra HOME porque 
 definimos que la ruta '/' iba a renderizar este componente 
 react
 *********************************************************
 */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//redux para el estado global de la applicacion
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducers from './Reducers'

import 'bootstrap/dist/css/bootstrap.min.css';



let store = createStore(Reducers)

const container = document.getElementById('root')

//ReactDOM.render(_que va a renderizar, donde va  renderizar)
ReactDOM.render(<Provider store={store}><App /></Provider>, container)







