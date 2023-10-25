"use strict";

document.addEventListener("DOMContentLoaded", function () {
    let canvasWidth=1920;
    let canvasHeight=1080;
    let limiteWidth= 7;
    let limiteHeight =6;
    let juegoWidth= 1024;
    let juegoHeight = 768;
    
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let circulos = [];

    function probarRectangulo() {
        addCirculo();
        addRectangulo();
        addRectangulo2();
        console.log(circulos);
        let y= (juegoWidth/7)+80;
        for(let i=0;i<limiteHeight;i++){

            let x= (juegoWidth/2)+40;
            for(let j=0;j<limiteWidth;j++){
                
                addCirculo(x,y,(((juegoWidth/2)/7)-15),"#101B27",ctx);
                x = x+((juegoWidth)/7);
            };
            y = y+(juegoHeight/7)+25;
          
        };
        for(let c=0;c<circulos.length;c++){
            circulos[c].draw();
        }
    };

    function addRectangulo() {
        let fondo = new Rectangulo(0, 0, 1920, 1080, "#101B27", ctx);
        fondo.draw();


    };
    function addRectangulo2() {
        let fondo2 = new Rectangulo((1920/4), (1080/13), 1024, 900, "#273849", ctx);
        fondo2.draw();
    };
    function addCirculo(posX,posY,radio,color){
        let circulo = new Circulo(posX,posY,radio,color,ctx);
        circulos.push(circulo);    
    };

    probarRectangulo();


}); 