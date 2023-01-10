//RECETA PARA CONSUMIR UN API CON REACT

export async function servicioCancionesTop(){

    //PA´ DONDE VAS
    //1. 

    const URL = "https://api.spotify.com/v1/artists/7cjh6y0V9SsyCrWSXTzwOs/top-tracks?market=US"

    //2. Que operacion vas hacer en la base de datos
    // CONFIGURAR LA CONFIGURACION DE ENVIO HACIA EL SERVIDOR

    const PETICION = {
        method: "GET",
        headers:{Authorization:"Bearer BQABeTtUDqF6uuCHic-DNwfsZ2Rlgq92kZfyZV0ld_RN_0sRJcRcxjMyqRMPvAw3hQq_15mJkyVP0F0GbLyGbKGHHKCLpofrb7PDOWfNQKU-S9Im7TrDvQJvwhKHrejvIQUdLeRC45o0_SElO_HeiJP8ULvbXRuy5qAt_mFFbDtU3ivUs_GaKYfdqVra4rNcmzo"}
    }
    //3. NOS VAMOS PAL RESTAURANTE
//CONSUMIMOS EL API
let respuesta=await fetch(URL,PETICION)
let canciones=await respuesta.json()

console.log(canciones)
}

