import { getCurrentUserInfo } from "../auth/auth-model.js";
import { getAnuncioById, removeAnuncio } from "./anuncios-detail-model.js";
import { buildAnuncioDetail, buildDeleteButton } from "./anuncios-detail-view.js";

export  async function anuncioDetailController(anuncioDetailContainer, anuncioId){
    try {  
        const anuncio = await getAnuncioById(anuncioId);

        const user = await getCurrentUserInfo();
        
        anuncioDetailContainer.innerHTML = buildAnuncioDetail(anuncio)
        try {
            if (user.id === anuncio.user.id) {
                const removeButtonElement = buildDeleteButton()
                anuncioDetailContainer.appendChild(removeButtonElement)
                removeButtonElement.addEventListener('click', async () => {
                    const shouldRemoveAnuncio = confirm('¿Estás seguro que quieres eliminar este anuncio?')
                    if(shouldRemoveAnuncio) {
                        await removeAnuncio(anuncio.id)
                        alert('Anuncio eliminado')
                    }
                    
                    window.location.href = "/"
                })
            }
            
        } catch (error) {
            alert(`Error al eliminar el anuncio ${error.message}`)
        }
    } catch (error) {
        alert (`Error al cargar el anuncio ${error.message}`)
        window.location.href = "/"
    }
}
