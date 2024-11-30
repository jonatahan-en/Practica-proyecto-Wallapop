import { anunciosController } from "./anuncios/anuncios-controller.js"
import { sessionController } from "./session/session-controller.js"
import { notificationController } from "./notificaciones/notificaciones-controller.js"



document.addEventListener("DOMContentLoaded", () => {
    const anunciosContainer = document.querySelector("#anuncios-container")
    const notificationContainer = document.querySelector("#notification-container")
    const sessionContainer = document.querySelector('#session')

    sessionController(sessionContainer)
    anunciosController(anunciosContainer)
    const {showNotification} = notificationController(notificationContainer)

    anunciosContainer.addEventListener("loading-anuncios-info", (event) => {
        showNotification(event.detail.message, event.detail.type);
    })
    
})
