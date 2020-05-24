const initialState = {
    usuarioLog: ''
}
const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'USUARIO_LOGEADO':
            return {
                ...state,
                usuarioLog: action.usuario,
            }
        default:
            return state
    }

}

export default Reducers;