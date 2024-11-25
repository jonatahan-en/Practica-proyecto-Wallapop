import { anunciosController } from "./anuncios/anuncios-controller.js"

document.addEventListener("DOMContentLoaded", () => {
    const anunciosContainer = document.querySelector("#anuncios-container")
    anunciosController(anunciosContainer)

})