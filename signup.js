import { signupController } from "./signup/signup-controller.js"

document.addEventListener('DOMContentLoaded',() => {
    const signupcontainer = document.querySelector("#signup-form")
    signupController(signupcontainer)
})