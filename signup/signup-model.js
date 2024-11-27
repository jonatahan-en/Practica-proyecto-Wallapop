export async function registrarUsuario(email, password){
    const response = await fetch("http://localhost:8000/auth/register",{
        method:"POST",
        body: JSON.stringify({
            username: email,
            password
        }),
        headers:{
            'Content-type': 'application/json'
        }
    })
    if(!response.ok){
        throw new Error("Error creando usuario")
    }
}