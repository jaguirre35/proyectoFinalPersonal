import "./Home.css";
import { Footer } from "../shared/Footer/Footer";
export function Home() {
  return (
    <>
      <section>
        <div className="banner"></div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h2>RBD</h2>
              <p>
              RBD es un grupo de pop mexicano, formado por los cantantes y actores Anahí, Dulce María, Maite Perroni, Alfonso Herrera, Christopher Uckermann y Christian Chávez, originario de la Ciudad de México. Fue creado por Pedro Damián, dentro de la telenovela Rebelde. Se formó el 4 de octubre de 2004 hasta su separación, y su último concierto fue en Madrid, España el 21 de diciembre de 2008. En 2020, la banda regresó a la música con Anahí, Maite Perroni, Christopher von Uckermann y Christian Chávez, cuatro de sus integrantes originales. Alfonso Herrera y Dulce María no regresaron en su reencuentro.
              <br/>
              En noviembre de 2004, lanzan su álbum debut titulado Rebelde. En septiembre de 2005, lanzan su segundo álbum de estudio, Nuestro amor, recibiendo su primera nominación en los Grammy Latinos. En 2006, lanzan su tercer álbum, Celestial, el primer sencillo del álbum fue la canción «Ser o parecer» que fue número uno en la lista Hot Latin Songs de Billboard,​ en ese mismo año publican su primer álbum en inglés, Rebels. En 2007, lanzan Empezar desde cero, siendo nominados nuevamente en los Grammy Latinos, y finalmente en 2008, su último álbum titulado Para olvidarte de mí.
              </p>
              <img src="https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/rbd3.jpg?alt=media&token=1feeabd0-f42b-421e-9092-afc1c5572982" className="img-fluid w-100">
              </img>
            </div>
            <div className="col-12 col-md-4 border-start align-self-center bg-dark text-white p-5">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="fw-bold">Proximos Conciertos</h1>
                                    <hr></hr>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Med</h3>
                                    <h5>Dec 2</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Cali</h3>
                                    <h5>Dec 3</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Bog</h3>
                                    <h5>Dec 4</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Barr</h3>
                                    <h5>Dec 5</h5>
                                </div>
                            </div>  

                        </div>
          </div>
        </div>
      </section>
      <section>
            <div className="container-fluid">
                <div className="row">
                    <div cllas="col-12">
                       <h1>NOTICIAS</h1>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/carousel1.jpg?alt=media&token=00c1b9d2-b2af-40b3-b3a4-d270888417f7" alt="" className="img-fluid w-100"></img>
                        <p>han pasado casi dos décadas -desde su aparición en 2004- y el mundo entero no se olvida de la agrupación RBD, la misma que llenó conciertos y enamoró a miles y miles de fanáticos con sus canciones y los personajes de la serie ‘Rebelde’ de Televis</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/carousel2.jpg?alt=media&token=c00eea4f-4171-40d6-b966-d83ace3baf6a" alt="" className="img-fluid w-100"></img>
                        <p>Para nadie es un secreto lo que significa ‘Rebelde‘ para una generación o varias generaciones enteras, pues se trató de la serie juvenil que marcó la vida de muchos adolescentes y que, ahora, años después, se la pasan pidiendo a gritos que aquella historia vuelva o que, por lo menos, sus personas que reencuentren.</p>
                    </div> 
                    <div className="col-12 col-md-4">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/carousel3.jpg?alt=media&token=9594a49e-c367-4ccc-9981-fe2e55fd850f" alt="" className="img-fluid w-100"></img>
                        <p>Han pasado 18 años desde que RBD lanzase al mercado su disco debut, Rebelde, conformándose como grupo tras el éxito de la telenovela juvenil con el mismo nombre y comenzando una trayectoria musical llena de canciones, múltiples discos de oro y platino, conciertos y entrevistas que hicieron historia conquistando a millones de personas en todo el mundo. ©copyright los40.com</p>
                    </div>    
                </div>
            </div>    
      </section>
      <Footer></Footer>
    </>
  );
}
