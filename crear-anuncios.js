
import { crearAnuncioController } from "./create-anuncios/crear-anuncios-controller.js"
import { isUserLoggedIn } from "./utils/auth.js"

if (!isUserLoggedIn()){
    window.location.href = "/"
}

document.addEventListener("DOMContentLoaded",() => {
    const createContainer = document.querySelector("#crear-anuncio-form")
    crearAnuncioController(createContainer)

    })