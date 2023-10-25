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
    let huecos = [];

    function probarTablero() {

        addRectangulo();
        addRectangulo2();
        console.log(huecos);
        let y= (juegoWidth/7)+80;
        for(let i=0;i<limiteHeight;i++){

            let x= (juegoWidth/2)+70;
            for(let j=0;j<limiteWidth;j++){
                
                addHueco(x,y,(((juegoWidth/2)/7)-15),"#101B27",ctx);
                x = (x+((juegoWidth)/7)-10);
            };
            y = y+(juegoHeight/7)+25;
          
        };
        for(let c=0;c<huecos.length;c++){
            huecos[c].draw();
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
    function addHueco(posX,posY,radio,color){
        let circulo = new Circulo(posX,posY,radio,color,ctx);
        huecos.push(circulo);    
    };

    probarTablero();


}); 