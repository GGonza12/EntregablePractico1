"use strict";
document.addEventListener("DOMContentLoaded", function () {

let carousel = document.querySelector('.carrusel');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > 7) { // Cambiar este número si deseas mostrar más o menos tarjetas a la vez
    currentIndex = 7;
  }
  updateCarousel();
  carousel.classList.add('test');
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  let translateX = currentIndex * -165; // Ajusta este valor según el número de tarjetas visibles
  carousel.style.transform = `translateX(${translateX}px)`;
  console.log(carousel);
     
};

updateCarousel(); // Inicializar el carrusel



});