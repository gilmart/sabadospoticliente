// PASOS PARA CONSUMIR UN API






//3. ARRANCA AL SERVIDOR = CONSUMIR EL API - VA AL SERVIDOR
    fetch(URI,PETICION)
    .then(function(respuesta){
        return(respuesta.json()) // GARANTIZO FORMATO JSON
    })
    .then(function(respuesta){
        console.log(respuesta) // HAGO LO Q QUIERA CON LA RESPUESTA
        pintarCanciones(respuesta)

    })
    .catch(function(respuesta){
        console.log(respuesta) // MUESTRO EL FALLO SI NO SE PUDO CONSUMIR EL API
    })

    //FUNCION PARA PINTAR INFO QUE LLEGA DEL API
    function pintarCanciones(canciones){
      //  console.log(canciones)       //objeto
     //console.log(canciones.tracks)     //arreglo
    
     let fila = document.getElementById('fila')

        //recorro el arreglo de canciones
        canciones.tracks.forEach(function(cancion){
            console.log(cancion.name)
            console.log(cancion.preview_url)
            console.log(cancion.popularity)
            console.log(cancion.album.images[0].url)

           //CREAR UNA COLUMNA PARA ADA CANCION
           
           let columna =document.createElement("div")
           columna.classList.add("col")

           //CREO LA TARJETA
           let tarjeta = document.createElement("div")
           tarjeta.classList.add("card", "h-100")

           //CREO FOTO
           let foto = document.createElement("img")
           foto.src=cancion.album.images[0].url
           foto.classList.add("card-img-top")

           //CREO NOMBRE
           let nombre = document.createElement("h6")
           nombre.classList.add("text-center")
           nombre.textContent=cancion.name

           //POPULARIDAD
           let popularidad = document. createElement("p")
           popularidad.classList.add("text-center")
           popularidad.textContent=cancion.popularity


            //CREO EL AUDIO
            let audio=document.createElement("audio")
            audio.src=cancion.preview_url
            audio.classList.add("w-100","bg-dark")
            audio.setAttribute("controls","controls")


           //PADRES E HIJOS

           tarjeta.appendChild(foto)
           columna.appendChild(tarjeta)
           fila.appendChild(columna)
           tarjeta.appendChild(audio)
           tarjeta.appendChild(nombre)
           tarjeta.appendChild(popularidad)

        })
    }