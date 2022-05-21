
//1. PARA DONDE VOY? = CONOCER URI DEL SERVICIO O API A CONSUMIR
//UNA PETICION ESTA COMPUESTA DE CABECERA, BODY Y PARA DONDE VOY - ARREGLO: TODOS LOS DATOS SON DEL MISMO TIPO

import { generarToken } from "./servicioGenerarToken.js"


export const URI_TOP_CANCIONES='https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH/top-tracks?market=US'

//1.1 URI DEL SERVICIO QUE GENERA TOKENS
export const URI_GENERAR_TOKEN= 'https://accounts.spotify.com/api/token'

//NOTA: DATOS DE ENVÍO (POST)
const DATO1= "client_id=1311e8f4148b420186712114630a2f1d"
const DATO2= "client_secret=2ce7e7ec0cee47f0ad52921f8b350a75"
const DATO3= "grant_type=client_credentials"

const DATOS_PETICION=`${DATO1}&${DATO2}&${DATO3}`

export const PETICION_GENERAR_TOKEN={
    method:"POST",
    headers:{"Content-type":"application/x-www-form-urlencoded"},
    body: DATOS_PETICION
}

//2. QUE VAS A HACER? = ARMO LA PETICION

let token = await generarToken() //llamo a la funcion generar token
const TOKEN= token.token_type+" "+token.access_token;

export const PETICION_TOP_CANCIONES={
    method:"GET",
    headers:{Authorization:TOKEN}
}