"use strict";
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".lupa").addEventListener("click",busquedaVisible);
    document.querySelector(".carritoCart").addEventListener("click",carritoVisible);

    function busquedaVisible() {
        let busqueda = document.querySelector(".contenedorBarraBusqueda");
        busqueda.classList.toggle("barra-busqueda-oculto");
 
        

    };
    function carritoVisible(){
        console.log("ja");
        let carrito = document.querySelector(".shopping-cart");
        carrito.classList.toggle("shopping-cart-Visible");
        console.log("ja");
    }


});