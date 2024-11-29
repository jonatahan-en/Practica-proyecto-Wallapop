export function sessionAutorizada(){
    return ` 
    <a href="/crear-anuncio-html">Crear anuncio</a>
    <button>Cerrar sesión</button>
    `
}

export function sesionNoAutorizada(){
    return `
    <a href="/login.html">Login</a>
    <a href="/signup.html">Signup</a>
    `
}