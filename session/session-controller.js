import { sesionNoAutorizada, sessionAutorizada } from "./session-view.js";

export function sessionController(sessionContainer){
    const isUserLoggedIn = () => {
        const token = localStorage.getItem('jwt')

        return !!token;
    }

    if (isUserLoggedIn()){
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