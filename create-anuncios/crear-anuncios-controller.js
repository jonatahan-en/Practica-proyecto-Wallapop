import { guardarAnuncios } from "./crear-anuncios-model.js";

export function crearAnuncioController(createContainer){
    createContainer.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        const photoElement = createContainer.querySelector('#foto')
        const nameElement = createContainer.querySelector('#nombre')
        const descriptionElement = createContainer.querySelector('#descripcion')
        const priceElement = createContainer.querySelector('#precio')
        const tradingElement = createContainer.querySelector('#compraVenta')

        const photo = photoElement.value;
        const name = nameElement.value;
        const description = descriptionElement.value;
        const price = priceElement.value;
        const trading = tradingElement.value;

        try {
            await guardarAnuncios(photo,name,description,price,trading);
            alert("Anuncio creado con éxito");
            window.location.href = "/";
        } catch (error) {
            alert(`Error al crear el anuncio: ${error.message}`);
        }
    });
}