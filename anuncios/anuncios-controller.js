import { getAnuncios } from "./anuncios-model.js";
import { buildAnuncio, buildEmptyAnuncios } from "./anuncios-view.js";

export async function anunciosController(anunciosContainer){
    try {
        anunciosContainer.innerHTML = "<p>Cargando anuncios</p>"
        const anuncios = await getAnuncios()

        if (anuncios.length === 0){
            anunciosContainer.innerHTML = buildEmptyAnuncios()
        }else{
            anunciosContainer.innerHTML = ""// limpia contenedor
            anuncios.forEach(anuncio => {
                const anunciosElement = buildAnuncio(anuncio)
                anunciosContainer.appendChild(anunciosElement)
            });

        }
        
    } catch (error) {
        anunciosContainer.innerHTML = `<p>Error${error.message}</P>`
    }

}