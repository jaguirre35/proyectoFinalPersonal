import "./Footer.css"

export function Footer(){
    return(
        <footer>
            <div class="container-fluid">
                <div class="row p-5 footer">
                    <div class="col-12 col-md-4 align-self-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotifyjdab.appspot.com/o/logo.png?alt=media&token=566c0bf7-bee2-44ef-aa33-21584262086c" alt="foto" class="img-fluid w-100"></img>
                    </div>
                    <div class="col-12 col-md-4 text-center">
                        <h2 class="fw-bold">SOBRE LA BANDA....</h2>
                        <h4>banda de pop</h4>
                    </div>
                    <div class="col-12 col-md-4">
                    <i class="bi bi-instagram fuente me-5"></i>
                    <i class="bi bi-tiktok fuente me-5"></i>
                    <i class="bi bi-facebook fuente me-5"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}