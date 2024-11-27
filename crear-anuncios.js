
import { crearAnuncioController } from "./create-anuncios/crear-anuncios-controller.js"
import { guardarAnuncios } from "./create-anuncios/crear-anuncios-model.js"

document.addEventListener("DOMContentLoaded",() => {
    const createContainer = document.querySelector("#crear-anuncio-form")
    crearAnuncioController(createContainer)

    createContainer.addEventListener('submit', async (event) => {
        event.preventDefault()
        const formData = new FormData(createContainer)
        try {
            await guardarAnuncios(formData)
            alert("anuncio creado con exito")
            window.location.href = '/index.html'
        } catch (error) {
            alert("Hubo un problema al crear el anuncio")
            
        }
    })
})