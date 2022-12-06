export function Mercancia(){

    let titulo="Productos de la banda"
    let productos=[
        {
            nombre:"camiseta original mujer escudo banda RBD",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/rbd_producto1.jpg?alt=media&token=7d73a032-9f63-46ac-b1ba-0d49f29c506c",
            precio:40
        },
        {
            nombre:"camiseta original hombre escudo banda RBD",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/rbd_producto2.jpg?alt=media&token=c43e7426-68a9-4698-9f88-bb1bead590b7",
            precio:40
        },
        {
            nombre:"camiseta original unisex roja escudo banda RBD",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/rbd_producto3.jpg?alt=media&token=f1e245d2-1f13-43f9-bc71-f70b34d8782e",
            precio:50
        },
        {
            nombre:"camiseta original unisex integrantes de banda RBD",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/rbd_producto4.jpg?alt=media&token=b7ccb276-1b1f-477f-8ce8-9b613905df22",
            precio:50
        },
        {
            nombre:"camiseta original unisex firmada por integrantes de banda RBD",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/rbd_producto5.jpg?alt=media&token=f2b3936d-6657-45cc-b27d-bcecaf10f8eb",
            precio:100
        },
        {
            nombre:"camiseta original unisex iconica con los integrantes de la banda RBD",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/rbd_producto6.jpg?alt=media&token=c858a6cf-e231-4462-b193-1be36aeb9e42",
            precio:80
        },
    ]

    return(
        <>
        <h1>{titulo}</h1>
        <div class="container">
            <div class="row row-col-1 row-cols-md-3 g-5">

                {
                    productos.map(function(producto){
                        return(
                            <>
                            <div class="col">
                                
                                <div class="card h-100 shadow">
                                    <img src={producto.foto} alt="img" class="h-100 img-fluid w-100"></img>
                                    <h3>{producto.nombre}</h3>
                                    <br/>
                                    <h5>{"Precio $" + producto.precio}</h5>
                                </div>

                            </div>
                            </>
                        )
                    })
                }

            </div>
        </div>
        </>
    )
}