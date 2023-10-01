"use strict";
document.addEventListener("DOMContentLoaded", function () {

let carousel = document.querySelector('.carrusel');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex++;
  let carouselWidth = document.querySelector('.contenedor-carrusel').scrollWidth;
  console.log(carouselWidth);
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

/*"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector('.contenedor-carrusel');
  const carousel = document.querySelector('.carrusel');
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
  const cardSize = document.querySelector('.card').offsetWidth;
  
  
  let currentIndex = 0;
  let cardWidth; // Ancho de cada tarjeta en porcentaje, se calculará dinámicamente
  
  nextBtn.addEventListener('click', () => {
    currentIndex++;
    const maxIndex = Math.max(0, Math.min(cardCount - visibleCards, cardCount - 1));
    currentIndex = Math.min(currentIndex, maxIndex);
    updateCarousel();
  });
  
  prevBtn.addEventListener('click', () => {
    currentIndex--;
    currentIndex = Math.max(currentIndex, 0);
    updateCarousel();
  });
  
  function updateCarousel() {
    cardWidth = 100 / visibleCards; // Calcula el ancho de la tarjeta dinámicamente
    const translateX = currentIndex * -cardWidth;
    carousel.style.transform = `translateX(${translateX}%)`;
  }
  
  // Detectar el número de tarjetas visibles en función del ancho de la ventana gráfica
  let visibleCards = calculateVisibleCards();
  window.addEventListener('resize', () => {
    visibleCards = calculateVisibleCards();
    updateCarousel();
  });
  
  function calculateVisibleCards() {
    const windowWidth = window.innerWidth;
    const cardMargin = 5; // Márgenes entre tarjetas en píxeles
    const minCardWidth = cardSize; // Ancho mínimo de la tarjeta en píxeles
    return Math.floor((windowWidth - cardMargin) / minCardWidth);
  }
  
  // Inicializar el carrusel
  const cardCount = document.querySelectorAll('.card').length;
  updateCarousel();

});*/