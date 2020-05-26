export const CAR_SELECTED = 'CAR_SELECTED'
export const SET_PLACA = 'SET_PLACA'


export function Car_selector(car) {
    return {
        type: CAR_SELECTED,
        car: car
    }
}
export function Set_placa(placa) {
    return {
        type: SET_PLACA,
        placa: placa
    }
}