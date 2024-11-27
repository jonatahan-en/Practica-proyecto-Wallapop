import { getAnuncioById } from "./anuncios-detail-model.js";
import { buildAnuncioDetail } from "./anuncios-detail-view.js";

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector("#anuncio-detail-container")
    // obtener el id
    const params = new URLSearchParams(window.location.search);
    const anuncioIn = params.get('id')

    if(!anuncioIn){
        container.innerHtml = '<P>Error: no se especifico un Id valido </P>'
    }
    try {  
        const anuncio = await getAnuncioById(anuncioIn)
        container.innerHTML = buildAnuncioDetail(anuncio)
    } catch (error) {
        container.innerHTML = `<p>Error al cargar el anuncio ${error.message}</p>`
    }
})