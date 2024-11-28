import { loginController } from "./login/login-controller.js"

document.addEventListener('DOMContentLoaded',() => {
    const loginContainer = document.querySelector('#login-form')
    loginController(loginContainer)
})