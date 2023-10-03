"use strict";
document.addEventListener("DOMContentLoaded", function () {

  let indexCarruseles = [];

  let nextBtns = document.querySelectorAll('#nextBtn');
  for (let i = 0; i < nextBtns.length; i++) {
    nextBtns[i].addEventListener('click', siguiente);
    indexCarruseles[i] = 0;
    nextBtns[i].dataset.index = i; //le da posicion el arreglo al que pertenece el boton
  };
  let prevBtns = document.querySelectorAll('#prevBtn');
  for (let i = 0; i < nextBtns.length; i++) {
    prevBtns[i].addEventListener('click', anterior);
    indexCarruseles[i] = 0;
    prevBtns[i].dataset.index = i;

  };



  function siguiente() {
    indexCarruseles[this.dataset.index] = indexCarruseles[this.dataset.index] + 1;
    let currentIndex = indexCarruseles[this.dataset.index];
    let claseCards = this.dataset.cards;
    let claseCarrusel = this.dataset.carrusel;
    let tamCard = document.querySelector(`.${claseCards}`).offsetWidth + 10; // el tamaño de la card + 10 del margin que tiene  
    let cantCards = document.querySelectorAll(`.${claseCards}`).length; //cantidad de cards
    let carrusel = document.querySelector(`.${claseCarrusel}`); //carrusel
    let tamCarrusel = document.querySelector(`.${claseCarrusel}`).offsetWidth; // tamaño del carrusel que tiene en el momento
    let cardsVisibles = (tamCarrusel / tamCard); //la cantidad de cards que se ve en pantalla
    let limiteClick = (cantCards - cardsVisibles); // para sacar cuando tiene que parar el carrusel
    if (currentIndex > (limiteClick)) { 
      currentIndex = limiteClick;
      indexCarruseles[this.dataset.index] = limiteClick;
    }
    updateCarousel(carrusel, tamCard, currentIndex);
  };

  function anterior() {
    indexCarruseles[this.dataset.index] = indexCarruseles[this.dataset.index] - 1;
    let currentIndex = indexCarruseles[this.dataset.index];


    let claseCards = this.dataset.cards;
    let claseCarrusel = this.dataset.carrusel;
    let carrusel = document.querySelector(`.${claseCarrusel}`); //carrusel.
    let tamCard = document.querySelector(`.${claseCards}`).offsetWidth + 10;

    if (currentIndex < 0) {
      currentIndex = 0;
      indexCarruseles[this.dataset.index] = 0;
    }
    updateCarousel(carrusel, tamCard, currentIndex);
  };


  function updateCarousel(carrusel, tamCard, currentIndex) {
    let translateX = currentIndex * -tamCard; // lo que se tiene que mover el carrusel dependiendo de la pantalla
    carrusel.style.transform = `translateX(${translateX}px)`;

  };






  //cantVisible variable que es la cantidad de cards que quiere que se muestre en el home (capaz que en px del tamaño de card)
  //cantCards guardo la cantidad de cards que tengo 
  //cantCards-cantVisible la cantidad de veces que se va a mover el carrusel si tengo 7 cards y muestro 5 se mueve 2 veces.
  //translateX mover la card por px mejor mover una card entera (230px)

}); 
