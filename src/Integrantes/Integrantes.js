export function Integrantes(){
    let titulo2="Integrantes de la banda"

    let integrantes=[
        {
            nombre:"Anahí Puente",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/anahi_rbd.jpg?alt=media&token=c68c47d8-ea7c-443e-a738-168a68629b78"
        },
        {
            nombre:"Dulce María",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/dulce_rbd.jpg?alt=media&token=36937a48-b468-4147-8adc-2f5723c77b77"
        },
        {
            nombre:"Maite Perroni",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/maite_rbd.jpg?alt=media&token=b4832f97-f0df-49fa-8db5-0bfc6cac2bc6"
        },
        {
            nombre:"Christian Chávez",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/christian_rbd.jpg?alt=media&token=1e74a19e-a523-46d9-92dc-670af8e60627"
        },
        {
            nombre:"Alfonso Herrera",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/alfonso_rbd.jpg?alt=media&token=557e3807-085b-41e0-99c7-51c8e4a9f479"
        },
        {
            nombre:"Christopher Uckermann",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/christofer_rbd.jpg?alt=media&token=ad6a1d06-522b-43cd-af64-c99c2c923056"
        }
    ]

    return(
        <>
        <h1>{titulo2}</h1>
        <div class="container">
            <div class="row row-col-1 row-cols-md-2 g-5">

                {
                    integrantes.map(function(integrante){
                        return(
                            <>
                            <div class="col">
                                
                                <div class="card h-100 shadow">
                                    <img src={integrante.foto}></img>
                                    <h3>{integrante.nombre}</h3>
                                    
                                    
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