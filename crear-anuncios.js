
import { crearAnuncioController } from "./create-anuncios/crear-anuncios-controller.js"

document.addEventListener("DOMContentLoaded",() => {
    const createContainer = document.querySelector("#crear-anuncio-form")
    crearAnuncioController(createContainer)

    })