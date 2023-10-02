"use strict";
document.addEventListener("DOMContentLoaded", function () {

let carousel = document.querySelector('.carrusel');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const cantCards = document.querySelectorAll('.card').length; //cantidad de cards
const tamCard = document.querySelector('.card').offsetWidth + 10 ; // el tamaño de la card + 10 del margin que tiene  
const tamCarrusel = document.querySelector('.carrusel').offsetWidth; // tamaño del carrusel que tiene en el momento

console.log(cantCards);
console.log(tamCard);
console.log(tamCarrusel);

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex++;
  let carouselWidth = document.querySelector('.contenedor-carrusel').scrollWidth;
  console.log(carouselWidth);
  let cardsVisibles = (tamCarrusel/tamCard);
  let limiteClick = (cantCards-cardsVisibles);
  if (currentIndex > (limiteClick)) { // Cambiar este número si deseas mostrar más o menos tarjetas a la vez
    currentIndex = limiteClick;
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
  let translateX = currentIndex * -tamCard; // lo que se tiene que mover el carrusel dependiendo de la pantalla
  carousel.style.transform = `translateX(${translateX}px)`;
  console.log(carousel);
     
};

updateCarousel(); // Inicializar el carrusel

//cantVisible variable que es la cantidad de cards que quiere que se muestre en el home (capaz que en px del tamaño de card)
//cantCards guardo la cantidad de cards que tengo 
//cantCards-cantVisible la cantidad de veces que se va a mover el carrusel si tengo 7 cards y muestro 5 se mueve 2 veces.
//translateX mover la card por px mejor mover una card entera (230px)

}); 
