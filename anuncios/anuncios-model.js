export async function getAnuncios(){
    try {
        const response = await fetch("http://localhost:8000/api/anuncios")
        if (!response.ok){
            throw new Error('recurso no existente')
        }
        const anuncios = await response.json();
        return anuncios
    } catch (error) {

        throw new Error(error.message)
        
    }
} 