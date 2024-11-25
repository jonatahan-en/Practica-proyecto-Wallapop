import { anuncioController } from "./anuncios/anuncios-controller.js"

document.addEventListener("DOMContentLoaded", () => {
    const anuncioContainer = document.querySelector("#anuncios-container")
    anuncioController(anuncioContainer)

})