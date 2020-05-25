const initialState = {
    usuarioLog: '',
    car_selected:''
}
const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'USUARIO_LOGEADO':
            return {
                ...state,
                usuarioLog: action.usuario,
            }
        case 'CAR_SELECTED':
            return{
                ...state,
                car_selected: action.car,
            }    
        default:
            return state
    }

}

export default Reducers;