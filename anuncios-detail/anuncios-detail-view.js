// construir anuncios detallados
export function buildAnuncioDetail(anuncio) {
    const detalleHTML = `
        <article class="anuncio-detalle">
            <img src="${anuncio.imagen || 'ruta/imagen-por-defecto.jpg'}" alt="Imagen de ${anuncio.nombre}">
            <h2>${anuncio.nombre}</h2>
            <p>${anuncio.descripcion}</p>
            <p>Precio: ${anuncio.precio} €</p>
            <p>Tipo: ${anuncio.compraVenta ? "Venta" : "Compra"}</p>
        </article>
    `;
    return detalleHTML;
}
