// construimos el anuncio
export function buildAnuncio(anuncio){
    const newAnuncio = document.createElement('div')

    const imagenHTML = anuncio.imagen
        ? `<img src="${anuncio.imagen}" alt="Imagen de ${anuncio.nombre}" class="anuncio-imagen">`
        : "";
    newAnuncio.innerHTML = `
    ${imagenHTML}
    <h3>${anuncio.nombre}</h3>
    <p>${anuncio.descripcion}</p>
    <p> Precio: ${anuncio.precio}</p>
    <p>Tipo: ${anuncio.compraVenta? 'Compra':'Venta'}</p>
    `;

    return newAnuncio

}
export function buildEmptyAnuncios() {
    return `<P>No hay anuncios disponibles</p>`
}