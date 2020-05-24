export const USUARIO_LOGEADO = 'USUARIO_LOGEADO'


export function Log_Usuario(usuario) {
    return {
        type: USUARIO_LOGEADO,
        usuario: usuario
    }
}


