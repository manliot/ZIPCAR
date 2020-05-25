export const CAR_SELECTED = 'CAR_SELECTED'


export function Car_selector(car) {
    return {
        type: CAR_SELECTED,
        car: car
    }
}