import { guardarAnuncios } from "./crear-anuncios-model.js";

export function crearAnuncioController(createContainer){
    createContainer.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(createContainer);

        try {
            await guardarAnuncios(formData);
            alert("Anuncio creado con éxito");
            window.location.href = "/index.html";
        } catch (error) {
            alert(`Error al crear el anuncio: ${error.message}`);
        }
    });
}


