import { servicioCancionesTop } from "../services/servicioCanciones"

export function Music(){

    servicioCancionesTop()

    return(
        <>
        <h1>MUSIC CARGANDO....</h1>
        </>
    )
}