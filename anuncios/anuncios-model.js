export async function getAnuncios() {
    try {
        const response = await fetch("http://localhost:8000/api/anuncios?_expand=user");
        const anuncios = await response.json();

        if (!response.ok){
            throw new Error('Recurso no existente')
        }
        return anuncios
    } catch (error) {

        throw new Error(error.message)
        
    }
} 