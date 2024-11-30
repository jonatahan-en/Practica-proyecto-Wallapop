// construimos el anuncio
export function buildAnuncio(anuncio){
    const newAnuncio = document.createElement('div')

    const imagenHTML = anuncio.photo
        ? `<img src="${anuncio.photo}" alt="Imagen de ${anuncio.name}" class="anuncio-imagen">`
        : "";
    newAnuncio.innerHTML = `
    ${imagenHTML}
    <h3>${anuncio.name}</h3>
    <p>${anuncio.description}</p>
    <p> Precio: ${anuncio.price}</p>
    <p>Tipo: ${anuncio.trading? 'Compra':'Venta'}</p>
    <a href="./anuncios-detail.html?id=${anuncio.id}" class="ver-detalle">Ver detalle</a>
    `;

    return newAnuncio

}
export function buildEmptyAnuncios() {
    return `<P>No hay anuncios disponibles</p>`
    
}