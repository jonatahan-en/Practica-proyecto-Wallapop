import { getAnuncios } from "./anuncios-model.js";
import { buildAnuncio, buildEmptyAnuncios } from "./anuncios-view.js";

function drawAnuncios(anuncios, anunciosContainer){
    if (anuncios.length === 0){
        anunciosContainer.innerHTML = buildEmptyAnuncios()
    }else{
        anuncios.forEach(anuncio => {
            const anunciosElement = buildAnuncio(anuncio)
            anunciosContainer.appendChild(anunciosElement)
        });
    }
}

function fireEvent( message, type, element) {
    const customEvent = new CustomEvent("loading-anuncios-info",{
        detail: {
            message,
            type,
        }
    })
    element.dispatchEvent(customEvent)
}
export async function anunciosController(anunciosContainer){
    const spinner = document.querySelector('.spinner')
    anunciosContainer.innerHTML = ""// limpia contenedor


    // ruleta
    spinner.classList.toggle('hidden')

    try {
        const anuncios = await getAnuncios()//cargamos los anuncios en la api   
        fireEvent("anuncios cargados correctamente","success",anunciosContainer)
        drawAnuncios(anuncios,anunciosContainer)
    } catch (error) {
        fireEvent(error.message,"error",anunciosContainer)
    } finally{
        spinner.classList.toggle('hidden')
    }   
}  