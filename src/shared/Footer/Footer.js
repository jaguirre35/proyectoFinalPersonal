import "./Footer.css"

export function Footer(){
    return(
        <footer>
            <div className="container-fluid">
                <div className="row p-5 footer">
                    <div className="col-12 col-md-4 align-self-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/logo.png?alt=media&token=566c0bf7-bee2-44ef-aa33-21584262086c" alt="foto" className="img-fluid w-100"></img>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <h2 className="fw-bold">SOBRE LA BANDA....</h2>
                        <h4>banda de pop</h4>
                    </div>
                    <div className="col-12 col-md-4">
                    <i className="bi bi-instagram fuente me-5"></i>
                    <i className="bi bi-tiktok fuente me-5"></i>
                    <i className="bi bi-facebook fuente me-5"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}