export function Integrantes(){
    let titulo2="Integrantes de la banda"

    let integrantes=[
        {
            nombre:"Anahí Puente",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/anahi_rbd.jpg?alt=media&token=c68c47d8-ea7c-443e-a738-168a68629b78",
            descripcion:"Anahí Giovanna Puente Portilla conocida como Anahí, es una actriz, cantante, modelo, compositora y empresaria mexicana. Inició su carrera en el programa Chiquilladas a la edad de dos años."
        },
        {
            nombre:"Dulce María",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/dulce_rbd.jpg?alt=media&token=36937a48-b468-4147-8adc-2f5723c77b77",
            descripcion:"Dulce María Espinosa Saviñón (Ciudad de México; 6 de diciembre de 1985) es una actriz y cantante mexicana. Comenzó su carrera en 1990, cuando, a los cinco años, se unió a comerciales de televisión y, tiempo después, se incorporaría al elenco de la serie de televisión infantil Plaza Sésamo, dándose a conocer internacionalmente recién en 2004, cuando actuó como la protagonista Roberta Pardo en la telenovela Rebelde, y en paralelo formó parte del grupo musical mexicano RBD"
        },
        {
            nombre:"Maite Perroni",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/maite_rbd.jpg?alt=media&token=b4832f97-f0df-49fa-8db5-0bfc6cac2bc6",
            descripcion:"Maite Perroni Beorlegui es una cantante y actriz mexicana.​ Saltó a la fama en 2004 con su personaje como Lupita Fernández en la telenovela juvenil mexicana Rebelde y como una de las integrantes del grupo RBD."
        },
        {
            nombre:"Christian Chávez",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/christian_rbd.jpg?alt=media&token=1e74a19e-a523-46d9-92dc-670af8e60627",
            descripcion:"José Christian Chávez Garza McAllen, Texas, 7 de agosto de 1983, es un actor y cantante mexicano. Conocido internacionalmente por interpretar a Giovanni Méndez en Rebelde, por haber sido parte del grupo musical RBD y por su personaje Patricio Lascuráin Villegas, Pato, en la serie mexicana La Casa De Las Flores."
        },
        {
            nombre:"Alfonso Herrera",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/alfonso_rbd.jpg?alt=media&token=557e3807-085b-41e0-99c7-51c8e4a9f479",
            descripcion:"Alfonso Herrera Rodríguez​ es un actor mexicano. Comenzó su carrera en la película Amar te duele, seguido de la telenovela Clase 406 que profundizaba en temas sociales, hasta Rebelde que alcanzó fama internacional, formando además parte del grupo RBD.​"
        },
        {
            nombre:"Christopher Uckermann",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/christofer_rbd.jpg?alt=media&token=ad6a1d06-522b-43cd-af64-c99c2c923056",
            descripcion:"En 2004 protagonizó la telenovela Rebelde, interpretando a Diego Bustamante, junto a Anahí Puente, Dulce María, Maite Perroni, Alfonso Herrera, y Christian Chávez.En la trama de Rebelde se forma un grupo musical que logra gran impacto en la audiencia, así Christopher y sus compañeros Dulce María, Anahi, Maite Perroni, Christian Chávez y Alfonso Herrera, comienzan una gran aventura que los lanzó a la fama internacional: la banda RBD. Christopher recorrió el mundo con gran éxito de la mano de RBD, visitando más de 23 países, 116 ciudades vendiendo más de 17 millones de discos, 10 millones de temas digitales, 2 millones de entradas de conciertos, 20 millones de distintos artículos de promoción y 4 millones de DVD."
        }
    ]

    return(
        <>
        <h1>{titulo2}</h1>
        <div className="container">
            <div className="row row-col-1 row-cols-md-1 g-5">

                {
                    integrantes.map(function(integrante){
                        return(
                            <>
                            <div className="row my-5">
                                
                                <div className="col-6 card h-100 shadow">
                                    <img src={integrante.foto} className="img-fluid w-100 h-100"></img>
                                </div>
                                <div className="col-6 my-5">
                                    <h1> {integrante.nombre} </h1>
                                    <h3> {integrante.descripcion} </h3>
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