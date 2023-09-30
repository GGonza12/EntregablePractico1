"use strict";
document.addEventListener("DOMContentLoaded", function () {

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > 5) { // Cambiar este número si deseas mostrar más o menos tarjetas a la vez
    currentIndex = 5;
  }
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  let translateX = currentIndex * -250; // Ajusta este valor según el número de tarjetas visibles
  carousel.style.transform = `translateX(${translateX}px)`;
}

updateCarousel(); // Inicializar el carrusel



});