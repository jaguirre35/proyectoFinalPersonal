//RECETA PARA CONSUMIR UN API CON REACT

export async function servicioCancionesTop(){

    //1. PA´ DONDE VAS
    // 

    const URL = "https://api.spotify.com/v1/artists/7cjh6y0V9SsyCrWSXTzwOs/top-tracks?market=US"

    //2. Que operacion vas hacer en la base de datos
    // CONFIGURAR LA CONFIGURACION DE ENVIO HACIA EL SERVIDOR

    const PETICION = {
        method: "GET",
        headers:{Authorization:"Bearer BQAayZTcUC_bjKCyKzrVdtNZfCGsXUGWuOFUWmYDdrcOvObtjhtd21b2AuD2H5_OJVbDtGEhvg0nwSlsveMCr6h4OTEvostld2gexNbYoMnfudVaWDMb75mFFnozPoq0KCwtvTjltBUnQ1J9lTo05hXp51G0NaLlnCNhMl-1HcWU6g2oSXnGZhKlFBpf-7aDmPI  "}
    }
    //3. NOS VAMOS PAL RESTAURANTE
//CONSUMIMOS EL API
let respuesta=await fetch(URL,PETICION)
let canciones=await respuesta.json()

return(canciones)

}

