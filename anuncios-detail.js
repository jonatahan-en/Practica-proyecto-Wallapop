import { anuncioDetailController } from "./anuncios-detail/anuncios-detail-controller.js";

document.addEventListener("DOMContentLoaded",  () => {
    const params = new URLSearchParams(window.location.search);
    const anuncioId = params.get('id')

    const anuncioDetailContainer = document.querySelector('#anuncio-detail-container')
    anuncioDetailController(anuncioDetailContainer, anuncioId)
})