import { REGEXP } from "../utils/const.js"
import { loginUser } from "./login-model.js"


export function loginController(form){
    form.addEventListener('submit', async(event) => {
        event.preventDefault()
        const emailElement = form.querySelector('#user-mail')
        const passwordElement = form.querySelector('#password')

        const email = emailElement.value;
        const password = passwordElement.value

        //VALIDACIONES
        const errors = []
        const emailRegExp = new RegExp(REGEXP.mail);
        if (!email || !password) {
            errors.push("Por favor, completa todos los campos");

        }
        if (!password || password.trim() === "") {
            errors.push("La contraseña no puede estar vacía.");
        }
        if (password.length <= 4 || password.length >= 12) {
            errors.push("La contraseña debe tener entre 4 y 12 caracteres.");
        }
        if (!emailRegExp.test(email)) {
        errors.push('formato de email incorrecto')
        }else{
            handleLoginUser(email, password)
        } 

        async function handleLoginUser(email, password) {
            const token = await loginUser(email, password)

            localStorage.setItem("jwt", token);
        }

        try {
        await loginUser(email, password)
            alert('Inicio de sesion exitosa')
            window.location.href = '/'
        } catch (error) {
            alert(`No se a podido iniciar sesión ${errors}`)
        
        }
    })
}

