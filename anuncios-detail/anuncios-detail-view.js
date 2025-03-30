// construir anuncios detallados
export function buildAnuncioDetail(anuncio) {
return `
<nav>
    <a href="./index.html">Inicio</a>
</nav>
<div>
<img src="${anuncio.photo}" alt="${anuncio.photo}">
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