// construir anuncios detallados
// construir anuncios detallados
export function buildAnuncioDetail(anuncio) {
    const imagenHTML = anuncio.photo
    ? `<img src="${anuncio.photo}" alt="Imagen de ${anuncio.name}" >`
    : "";
return `
<nav>
        <a href="./index.html">Inicio</a>
    </nav>
<div>
${imagenHTML}
<h3>${anuncio.name}</h3>
<p>${anuncio.description}</p>
<p> Precio: ${anuncio.price}</p>
<p>Tipo: ${anuncio.trading? 'Compra':'Venta'}</p>
</div>
`;

}

export function buildDeleteButton(){
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Eliminar'
    return removeButton
}