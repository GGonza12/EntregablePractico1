"use strict";


/*Como que se va difuminando cuando pasan los 5 segundos */
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.querySelector('.overlay').style.opacity = 0;
    }, 5000);
});


/*Se elimina de una sin esperar a que se  */
/*
document.addEventListener('DOMContentLoaded', function () {
    // Bloquear la interacción del usuario
    document.body.style.pointerEvents = 'none';
  
    // Esperar 5 segundos y luego cambiar la opacidad del overlay
    setTimeout(function () {
      var overlay = document.querySelector('.overlay');
      if (overlay) {
        // Eliminar el overlay del DOM
        overlay.remove();
      }
  
      // Desbloquear la interacción del usuario después de que haya transcurrido el tiempo
      setTimeout(function () {
        document.body.style.pointerEvents = 'auto';
      }, 500);
    }, 5000);
  });
  */