export async function loginUser(email, password) {
    const response = await fetch("http://localhost:8000/auth/login", {
        method: 'POST',
        body: JSON.stringify({
            username: email,
            password:password,
        }),
        headers:{
            'Content-type': 'application/json',
        }
    })
    if (!response.ok){
        throw new Error('Error iniciando sesion')
    }
    const data = await response.json();
    localStorage.setItem("jwt", data.token);
    
}