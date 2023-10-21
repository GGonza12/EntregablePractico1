"use strict";
document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.getElementById("juego");
    const ctx = canvas.getContext("2d");
    let fondoJuego = new Image(222, 600);
    let canvasWidth = 1920;
    let canvasHeight = 1080;
    fondoJuego.src = "./images/paginaJuego/fondoJuego.png";

    let fichas = [];
    let images = ["./images/paginaJuego/TT1.png",
    "./images/paginaJuego/TT2.png",
    "./images/paginaJuego/TT3.png",
    "./images/paginaJuego/TT4.png",
    "./images/paginaJuego/CT1.png",
    "./images/paginaJuego/CT2.png",
    "./images/paginaJuego/CT3.png",
    "./images/paginaJuego/CT4.png" ];
    let maxFichas = 42; // limite de 4 en linea

   /* fondoJuego.onload = function () {
        drawImageMethod(this);
    }; */

    function drawImageMethod(image) {
        ctx.drawImage(image, 0, 0, 1920, 1080);

    };

    function probarFichas() {
        addFicha();

    };

    function drawFicha() {
        for (let i = 0; i < fichas.length; i++) {
            fichas[i].draw();
        };
    }

    function addFicha() {
        let posX = Math.round(Math.random() * canvasWidth);
        let posY = Math.round(Math.random() * canvasHeight);
       // let color = randomRGBA();
        let image = randomImages();
        console.log(image);
        //constructor(posX,posY,radius,fill,player,context)
        let fichita = new Ficha(posX, posY, 70, image, 1, ctx);
        fichas.push(fichita);
    }

    function addFichas() {
        addFicha();
        if (fichas.length < maxFichas) {
            addFichas();
        };
        drawFicha();
    };

    function randomRGBA() {
        let r  = Math.round(Math.random()* 255);
        let g = Math.round(Math.random()* 255);
        let b = Math.round(Math.random()* 255);
        let a = 255;
        return `rgba(${r},${g},${b},${a}) `;
    };

    function randomImages(){
        /*let imgRandom = new Image();
        imgRandom.src =  images[Math.round(Math.random()* 8)]; */
        let imgRandom = images[Math.round(Math.random()* 8)];
      /*   let pattern = ctx.createPattern(imgRandom, "no-repeat"); */
        return `${imgRandom}`;
        
    }

    addFichas();






}); 