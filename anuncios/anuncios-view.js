// construimos el anuncio
export function buildAnuncio(anuncio){
    const newAnuncio = document.createElement('a')
    newAnuncio.setAttribute('href',`/anuncios-detail.html?id=${anuncio.id}`)
    newAnuncio.innerHTML = `
    <div>
    <img src="${anuncio.photo}" alt="${anuncio.photo}">
    <h3>${anuncio.name}</h3>
    <p>${anuncio.description}</p>
    <p> Precio: ${anuncio.price}</p>
    <p>Tipo: ${anuncio.trading? 'Compra':'Venta'}</p>
    </div>
    `;

    return newAnuncio

}
export function buildEmptyAnuncios() {
    return `<P>No hay anuncios disponibles</p>`
    
}