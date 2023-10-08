"use strict";
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".lupa").addEventListener("click",busquedaVisible);

    function busquedaVisible() {
        let busqueda = document.querySelector(".contenedorBarraBusqueda");
        busqueda.classList.toggle("barra-busqueda-oculto");
 
        

    };

});