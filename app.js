import { consumirCanciones } from "./servicioTopCanciones.js";
import {pintarCanciones} from "./pintarCanciones.js";

//let token=await generarToken()
//console.log(token)
//console.log(token.token_type+" "+token.access_token)

let canciones = await consumirCanciones()
pintarCanciones(canciones)