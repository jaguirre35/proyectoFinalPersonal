import { servicioCancionesTop } from "../services/servicioCanciones"
import { useState,useEffect } from "react"

export function Music(){

    //usando el hook usestate para almacenar la respuesta 
    // del api de forma global
    const[canciones,setCanciones]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)

    //usando los hook useeffect para limitar el consume
    //del api a una sola vez
    useEffect(function(){

        servicioCancionesTop().then(function(respuesta){
            setCanciones(respuesta)  
            setEstadoCarga(false)
            })

    },[])

    //render del componentes
    if(estadoCarga==true){

        return(
            <>
                <h2>Estamos cargando las canciones...</h2>            
            </>
        )

    }else{

        return(
            <>
            <h2>Canciones de la Banda: </h2>
            <div className="container-fluid">
                    <div className="row row-col-1 row-cols-md-5 g-5">
                        {
                            canciones.tracks.map(function(cancion,id){
                                console.log(cancion)
                                return(
                                    <div key={id}>
                                        <div className="col h-100">
                                            <div className="card h-100 shadow">
                                                <img className="w-100 img-fluid" src={cancion.album.images[0].url}></img>
                                                <h4 className="text-center my-2">{cancion.name}</h4>
                                                <audio className="w-75 d-block mx-auto" controls src={cancion.preview_url}> </audio>
                                                
                                                <h6 className="text-center my-3">Popularidad: {cancion.popularity}</h6>
                                            </div>
                                            
                                        </div>
                                
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
                
            </>
        )

    }

}