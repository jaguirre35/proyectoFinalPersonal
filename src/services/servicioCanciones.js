import { generarToken } from "./servicioToken";

//RECETA PARA CONSUMIR UN API CON REACT

export async function servicioCancionesTop(){

    let token=await generarToken();

    //1. PA´ DONDE VAS
    // 

    const URL = "https://api.spotify.com/v1/artists/7cjh6y0V9SsyCrWSXTzwOs/top-tracks?market=US"

    //2. Que operacion vas hacer en la base de datos
    // CONFIGURAR LA CONFIGURACION DE ENVIO HACIA EL SERVIDOR

    const PETICION = {
        method: "GET",
        headers:{Authorization:token}
    }
    //3. NOS VAMOS PAL RESTAURANTE
//CONSUMIMOS EL API
let respuesta=await fetch(URL,PETICION)
let canciones=await respuesta.json()

return(canciones)

}

