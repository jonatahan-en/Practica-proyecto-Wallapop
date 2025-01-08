import { REGEXP } from "../utils/const.js"
import { registrarUsuario } from "./signup-model.js"

export function signupController(form){
    form.addEventListener('submit', async(event) => {
        event.preventDefault()
        
        const nameElement = form.querySelector('#name')
        const userNameElement = form.querySelector('#user-mail')
        const PasswordElement = form.querySelector('#password')
        const PasswordConfirmElement = form.querySelector('#password-confirm')

        const name = nameElement.value
        const userEmail = userNameElement.value;
        const password = PasswordElement.value;
        const passwordConfirm = PasswordConfirmElement.value;
        // validaciones importante  inplementar mas
        const errors = []
        const nameRegname = new RegExp(REGEXP.name)
        if (!nameRegname.test(name)){
            errors.push('formato de nombre incorrecto')
        }
        const emailRegExp = new RegExp(REGEXP.mail);
        if (!emailRegExp.test(userEmail)) {
            errors.push('formato de mail incorrecto')
        }
        if (password !== passwordConfirm){
            errors.push('los password no son iguales')
        }
        if (password.length <= 4 || password.length >= 12) {
            errors.push("La contraseña debe tener entre 4 y 12 caracteres.");
        }
        if (/\s/.test(password)) {
            errors.push("La contraseña no debe contener espacios.");
        }


        try {
            await registrarUsuario(name,userEmail, password, passwordConfirm); // Llama a la función del modelo para crear usuario
            alert('Usuario registrado con éxito');
            window.location.href = '/'; 
        } catch (error) {
            alert(`Error al registrar usuario: ${errors}`);
        }

    })

}