import { useLocation } from "react-router-dom"
import'./AmpliarInfo.css'
export function AmpliarInfo(){
    let datosrecibidos=useLocation()

    let producto=datosrecibidos.state.productoSeleccionado
    console.log(producto)
    return(
        <>
        <div className="container">
            <div className="row my-5">
                <div className="col-12 col-md-4 ">
                    <img src={producto.foto} alt="foto" className="img-fluid w-100"/>
                </div>
                <div className="col-12 col-md-4 border p-3">
                    <h2 className="fw-bold">{producto.nombre}</h2>
                    <h1 className="mt-3 display-4 ">${producto.precio}<span className="descuento">20% off</span></h1>
                    <br/>
                     <span class="badge text-bg-primary">Descuento del dia</span>
                     <p>Hasta 48 cuotas</p>
                     <img src="https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/american-express.png?alt=media&token=db17b275-905c-4e74-af42-f4e251f670f0" alt="" className=""></img>
                     <img src="https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/visa%20(1).png?alt=media&token=49fd2bd0-37e0-453b-b5e9-ed5100462300" alt="" className=""></img>
                     <br/>
                     <img class="bi bi-truck mt-5 fs-1 text success" src="https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/camion-de-carga.png?alt=media&token=be8a9d18-b8d4-416d-bd22-9abfe531f1a9" alt=""></img>
                     <p className="text-successe fw-bold">Envio gratis a nivel nacional</p>
                     <p>Conoce los tiempos y formas de envio.</p>

                    <img class="bi bi-arrow-clockwise mt-5fs-1 text-success" src="https://firebasestorage.googleapis.com/v0/b/spotydseg.appspot.com/o/descargar.png?alt=media&token=6dfa18e5-2c82-4f4b-9bc3-70082e3737af" alt=""></img>  

                    <p>Devolucion gratis</p>
                    <p>30 dias para reembolso</p>
                    <br/>
                    <p className="text-successe fw-bold">{producto.especificaciones}</p>




                </div>
            </div>

        </div>
        </>
    )
}