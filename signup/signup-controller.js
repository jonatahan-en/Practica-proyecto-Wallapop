import { REGEXP } from "../utils/const.js"
import { registrarUsuario } from "./signup-model.js"

export function signupController(form){
    form.addEventListener('submit', async(event) => {
        event.preventDefault()

        const userNameElement = form.querySelector('#user-mail')
        const PasswordElement = form.querySelector('#password')

        const userEmail = userNameElement.value;
        const password = PasswordElement.value;
        // validaciones importante  inplementar mas
        const emailRegExp = new RegExp(REGEXP.mail);
        if (!emailRegExp.test(userEmail)) {
        errors.push('formato de mail incorrecto')
        }

        try {
            await registrarUsuario(userEmail, password); // Llama a la función del modelo para crear usuario
            alert('Usuario registrado con éxito');
            window.location.href = '/login.js'; 
        } catch (error) {
            alert(`Error al registrar usuario: ${error.message}`);
        }

    })

}