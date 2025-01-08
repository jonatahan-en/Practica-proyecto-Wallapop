import { isUserLoggedIn } from "../utils/auth.js";
import { sesionNoAutorizada, sessionAutorizada } from "./session-view.js";

export function sessionController(sessionContainer){
    

    if (isUserLoggedIn()) {
        sessionContainer.innerHTML = sessionAutorizada()
        const closeSessionButton = sessionContainer.querySelector('button')
        closeSessionButton.addEventListener('click',()=> {
        localStorage.removeItem('jwt')
        sessionController(sessionContainer)
        })
    }else{
        sessionContainer.innerHTML = sesionNoAutorizada()
    }
}