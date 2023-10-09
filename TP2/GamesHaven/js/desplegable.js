"use strict";
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".lupa").addEventListener("click",busquedaVisible);
    document.querySelector(".carritoCart").addEventListener("click",carritoVisible);
    document.querySelector(".btn-compartir").addEventListener("click",desplegablePopUp);
    document.querySelector(".desplegarPerfil").addEventListener("click", desplegableUsuarioVisible);
    function busquedaVisible() {
        let busqueda = document.querySelector(".contenedorBarraBusqueda");
        busqueda.classList.toggle("divVisible");
 
        

    };
    function carritoVisible(){
        let carrito = document.querySelector(".shopping-cart");
        carrito.classList.toggle("divVisible");
    }
    function desplegableUsuarioVisible(){
        let usuario = document.querySelector(".desplegableUsuario");
        usuario.classList.toggle("divVisible");
    }
    function desplegablePopUp(){
        let popUp = document.querySelector(".popUp");
        popUp.classList.toggle("divVisible");
    }


});