import{URI_TOP_CANCIONES} from './constantes.js'
import{PETICION_TOP_CANCIONES} from './constantes.js'

//console.log(URI_TOP_CANCIONES)
//console.log(PETICION_TOP_CANCIONES)

export async function consumirCanciones(){

    let respuesta=await fetch(URI_TOP_CANCIONES,PETICION_TOP_CANCIONES)
    return respuesta.json()
}