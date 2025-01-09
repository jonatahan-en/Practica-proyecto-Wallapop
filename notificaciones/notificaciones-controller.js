import { buildNotification } from "./notificaciones-view.js";

export function notificationController(notificationContainer){

    const showNotification = (message, type = "success") => {
        notificationContainer.innerHTML = buildNotification(message, type)
        setTimeout(() => {
            notificationContainer.innerHTML = "";
        },2000)
    }
    return {
        showNotification
    }
}