//crear anuncios por id
export async function getAnuncioById(anuncioId) {
    try {
        const response = await fetch(`http://localhost:8000/api/anuncios/${anuncioId}?_expand=user`);
        const anuncio = await response.json();
        
        if(!response.ok){
            throw new Error("error al cargar el anuncio")
        }

        return anuncio;

    } catch (error) {
        throw new Error("Solicitud fallida", error.message)
    }
}

export async function removeAnuncio(anuncioId) {
    const token = localStorage.getItem('jwt')
    try {
        const response = await fetch(`http://localhost:8000/api/anuncios/${anuncioId}`,{
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        if(!response.ok){
            throw new Error("recursos no encontrados")
        }

    } catch (error) {
        throw new Error("Solicitud fallida", error.message)
    }
}