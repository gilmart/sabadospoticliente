import { consumirCanciones } from "./servicioTopCanciones.js";
let canciones = await consumirCanciones()
console.log(canciones)