"use strict";
document.addEventListener("DOMContentLoaded", function() {
document.querySelector(".card").addEventListener("mouseover", cambiarEstilo);
document.querySelector(".card").addEventListener("mouseout", cambiarEstilo);

function cambiarEstilo(){
    let badgeGratis = document.querySelector(".badge-gratis");
    let badge = document.querySelector(".badge");
    let triangulo = document.querySelector(".triangulo");
    badgeGratis.classList.toggle("hover");
    badge.classList.toggle("badge-hover");
    triangulo.classList.toggle("triangulo-hover");
    
   
}
});