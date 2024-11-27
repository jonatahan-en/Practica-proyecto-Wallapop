import { signupController } from "./signup/signup-controller.js"

document.addEventListener('DOMContentLoaded',() => {
    const signupcontainer = document.querySelector("form")
    signupController(signupcontainer)
})