//crear anuncios por id
export async function getAnuncioById(){
    try {
        const response = await fetch(`http://localhost:8000/api/anuncios${id}?_expand=user`)
        if(!response.ok){
            throw new Error("error al cargar el anuncio")
        }
        const anuncio = await response.json()
        return anuncio
    } catch (error) {
        throw new Error("Solicitud fallida", error.message)
    }
}