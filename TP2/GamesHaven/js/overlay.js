"use strict";

document.addEventListener('DOMContentLoaded', function () {
    // Bloquear la interacción del usuario
    document.body.style.pointerEvents = 'none';

    // Esperar 5 segundos y luego cambiar la opacidad del overlay
    setTimeout(function () {
        document.querySelector('.overlay').style.opacity = 0;

        // Desbloquear la interacción del usuario después de que haya transcurrido el tiempo
        setTimeout(function () {
            document.body.style.pointerEvents = 'auto';
        }, 500);
    }, 5000);
});