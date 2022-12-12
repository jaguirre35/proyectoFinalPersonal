import { useLocation } from "react-router-dom"

export function AmpliarInfo(){

    let datosRecibidos=useLocation();

    let producto=datosRecibidos.state.productoSeleccionado
    console.log(producto)


    return(
        <>
            <h1> {producto.nombre} </h1>
        </>
    )
}