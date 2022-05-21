
//1. PARA DONDE VOY? = CONOCER URI DEL SERVICIO O API A CONSUMIR
//UNA PETICION ESTA COMPUESTA DE CABECERA, BODY Y PARA DONDE VOY - ARREGLO: TODOS LOS DATOS SON DEL MISMO TIPO

export const URITOPCANCIONES='https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH/top-tracks?market=US'

//1.1 URI DEL SERVICIO QUE GENERA TOKENS
const URIGENERARTOKEN= 'https://accounts.spotify.com/api/token'

//NOTA: DATOS DE ENVÍO (POST)
const DATO1= "client_id=1311e8f4148b420186712114630a2f1d"
const DATO2= "CLIENT_SECRET=2ce7e7ec0cee47f0ad52921f8b350a75"
const DATO3= "grant_type=client_credentials "

const DATOSPETICION=`${DATO1}&${DATO2}&${DATO3}`

const PETICIONGENERARTOKEN={
    method:"POST",
    headers:{"Content-type"  }
}

//2. QUE VAS A HACER? = ARMO LA PETICION

const TOKEN= 'Bearer BQB6zd6SO_7dhvgHlI_zngOzkgEraRpYg6qQtpUPOWyT2ajZECveXoYWNHNA1tZiJzsmGRK35gNhY19QfHwsn9bNJJ2MYOuW1l9hFE9ez7UzkaThf6C3LwyjuiRHNUeX3LcEcFMOGiT2ZdFTO98px0kHkXynSVY'

export const PETICIONTOPCANCIONES={
    method:"GET",
    headers:{Authorization:TOKEN}
}