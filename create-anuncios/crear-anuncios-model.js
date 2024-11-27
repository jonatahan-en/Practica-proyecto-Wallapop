export async function guardarAnuncios(formData){
        const token = localStorage.getItem("jwt");
    if (!token) {
        throw new Error("Usuario no autenticado");
    }

    const response = await fetch("http://localhost:8000/api/anuncios", {
        method: "POST",
        body: formData,
        headers: {
            "Authorization": `Bearer ${token}`
            }
    });

    if (!response.ok) {
        throw new Error("Error al guardar el anuncio");
    }

    return await response.json();
}

