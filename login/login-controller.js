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
        const emailRegExp = new RegExp(REGEXP.mail);
        if (!emailRegExp.test(email)) {
        errors.push('formato de mail incorrecto')
        }
        if (!email || !password) {
            alert("Por favor, completa todos los campos");
            return;
        }

        try {
        await loginUser(email, password)
            alert('Inicio de secion exitosa')
            window.location.href = '/index.html'
        } catch (error) {
            alert(error.message)
        
        }
    })
}

