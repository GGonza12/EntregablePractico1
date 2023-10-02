"use strict";
document.addEventListener("DOMContentLoaded", function () {

let nextBtns = document.querySelectorAll('#nextBtn');
for(let i=0 ;i< nextBtns.length;i++){
  nextBtns[i].addEventListener('click', siguiente);
} ;
let prevBtns = document.querySelectorAll('#prevBtn');
for(let i=0 ;i< nextBtns.length;i++){
  prevBtns[i].addEventListener('click', anterior);
} ;


let currentIndex = 0;


function siguiente() {
   
    currentIndex++;
    let claseCards= this.dataset.cards;
    let claseCarrusel = this.dataset.carrusel;
    let tamCard = document.querySelector(`.${claseCards}`).offsetWidth + 10 ; // el tamaño de la card + 10 del margin que tiene  
    let cantCards = document.querySelectorAll(`.${claseCards}`).length; //cantidad de cards
    let carrusel = document.querySelector(`.${claseCarrusel}`); //carrusel
    let tamCarrusel = document.querySelector(`.${claseCarrusel}`).offsetWidth; // tamaño del carrusel que tiene en el momento
    let carouselWidth = document.querySelector(`.${claseCarrusel}`).scrollWidth;
    console.log(carouselWidth);
    let cardsVisibles = (tamCarrusel/tamCard);
    let limiteClick = (cantCards-cardsVisibles);
    if (currentIndex > (limiteClick)) { // Cambiar este número si deseas mostrar más o menos tarjetas a la vez
      currentIndex = limiteClick;
    }
    updateCarousel(carrusel,tamCard,currentIndex);
  };

function anterior(){
  currentIndex--;
  let claseCards= this.dataset.cards;
  let claseCarrusel = this.dataset.carrusel;
  let carrusel = document.querySelector(`.${claseCarrusel}`); //carrusel.
  let tamCard = document.querySelector(`.${claseCards}`).offsetWidth + 10 ;
  
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  updateCarousel(carrusel,tamCard ,currentIndex);
};

function updateCarousel(carrusel, tamCard, currentIndex) {
  let translateX = currentIndex * -tamCard; // lo que se tiene que mover el carrusel dependiendo de la pantalla
  carrusel.style.transform = `translateX(${translateX}px)`;
  console.log(carrusel);
     
};






//cantVisible variable que es la cantidad de cards que quiere que se muestre en el home (capaz que en px del tamaño de card)
//cantCards guardo la cantidad de cards que tengo 
//cantCards-cantVisible la cantidad de veces que se va a mover el carrusel si tengo 7 cards y muestro 5 se mueve 2 veces.
//translateX mover la card por px mejor mover una card entera (230px)

}); 
