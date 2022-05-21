import{URITOPCANCIONES} from './constantes.js'
import{PETICIONTOPCANCIONES} from './constantes.js'

console.log(URITOPCANCIONES)
console.log(PETICIONTOPCANCIONES)

export async function consumirCanciones(){

    let respuesta=await fetch(URITOPCANCIONES,PETICIONTOPCANCIONES)
    return respuesta.json()
}