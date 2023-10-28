"use strict";

document.addEventListener("DOMContentLoaded", function () {
    let canvasWidth = 1920;
    let canvasHeight = 1080;
    let limiteWidth = 7;
    let limiteHeight = 6;
    let juegoWidth = 800;
    let juegoHeight = 600;
    let maximoFichas = limiteWidth * limiteHeight;
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let huecos = [];
    let fichas = [];

    let imgFichas = ["./images/paginaJuego/TT1.png",
        "./images/paginaJuego/TT2.png",
        "./images/paginaJuego/TT3.png",
        "./images/paginaJuego/TT4.png",
        "./images/paginaJuego/CT1.png",
        "./images/paginaJuego/CT2.png",
        "./images/paginaJuego/CT3.png",
        "./images/paginaJuego/CT4.png"];
    function probarTablero() {

        addRectanguloFondo();
        addRectanguloJuego();
        addRectangulo(canvasWidth / 7, 100, 150, 700, "#5d79ae");
        console.log(canvasWidth / 20);
        addRectangulo(1500, 100, 150, 700, "#413a27");
        console.log(huecos);
        let y = (canvasHeight / 5) + 60;
        //let y= (juegoWidth/5)+20;
        // addFicha(500,y,(((juegoWidth/2)/7)-15),ruta);



        for (let i = 0; i < limiteHeight; i++) {

            let x = (juegoWidth / 2) + 170;
            for (let j = 0; j < limiteWidth; j++) {

                addHueco(x, y, (40), "#101B27", ctx);
                x = (x + ((juegoWidth) / 7) - 10);
            };
            y = y + (juegoHeight / 7) + 10;

        };
        for (let c = 0; c < huecos.length; c++) {
            huecos[c].draw();
        }

        generarFichas(y);
        
        //  let ruta = "./images/paginaJuego/CT1.png";
        //  addFicha((canvasWidth/7)+75,y-150,(40),ruta);
        //  fichas[0].drawImage();

    };
    function addRectangulo(x, y, width, height, color) {
        let fondo = new Rectangulo(x, y, width, height, color, ctx);
        fondo.draw();


    };
    function addRectanguloFondo() {
        let fondo = new Rectangulo(0, 0, canvasWidth, canvasHeight, "#101B27", ctx);
        fondo.draw();


    };
    function addRectanguloJuego() {
        let fondo2 = new Rectangulo((canvasWidth / 4), canvasHeight / 5, juegoWidth, juegoHeight, "#273849", ctx);
        fondo2.draw();
    };
    function addHueco(posX, posY, radio, color) {
        let circulo = new Circulo(posX, posY, radio, color, ctx);
        huecos.push(circulo);
    };

    function addFicha(posX, posY, radio, imgRuta) {
        //  ct1.src = "./images/paginaJuego/CT1.png";
        let circulo = new Circulo(posX, posY, radio, imgRuta, ctx);
        fichas.push(circulo);

    };

    function generarFichas(y){
        let yFicha = y;
        const min = 4;
        const max = 7;
        for (let f = 0; f < maximoFichas; f++) {
            if(f<maximoFichas/2){
                let ruta = imgFichas[Math.round(Math.random() * 3)];
                addFicha((canvasWidth / 7) + 75, yFicha - 150, (40), ruta);
            }
            else {
                if(f==maximoFichas/2){
                    yFicha = y;
                }
                let imgCT = Math.floor(Math.random() * (max-min + 1)+min);
                let ruta = imgFichas[imgCT];
                console.log(imgCT);
                addFicha(1600, yFicha - 150, (40), ruta);
            }
        
       
            fichas[f].drawImage();
            yFicha = yFicha - 5;

        };
    }

    probarTablero();


}); 