export async function getAnuncios(){
    try {
        const response = await fetch("http://localhost:8000/api/anuncios?_expand=user")
        if (!response.ok){
            throw new Error('Error al cargar el anuncio')
        }
        
        const anuncios = await response.json();
        return anuncios
    } catch (error) {
        throw new Error(error.message)
        
    }
}