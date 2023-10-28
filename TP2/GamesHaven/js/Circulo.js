class Circulo extends Figura {
    constructor(posX, posY, radius, fill, context) {
        super(posX, posY, fill, context);

        this.radius = radius;
    }

    draw() {
        super.draw();
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();
        
    }
    drawImage(){
        let imgFicha = new Image();
        imgFicha.src = this.fill;
        let drawFicha = ()=> {
            this.context.save();
            this.context.beginPath();
            this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
            this.context.stroke();
            this.context.closePath();
            this.context.clip();
        
            // Set the globalCompositeOperation property
            this.context.globalCompositeOperation = "source-over";
        
            // Draw the image
            this.context.drawImage(imgFicha, (this.posX-this.radius), (this.posY-this.radius), this.radius*2,this.radius*2);
        
            // Restore the context
            this.context.restore();
        
            // Increment posY for next circle
            
        }; 
        imgFicha.onload =  drawFicha;
    }
/*
    drawImage(){
        this.context.save();
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        let imgFicha = new Image();
        imgFicha.src = this.fill; 
        let draw = ()=>this.context.drawImage(imgFicha, this.posX, this.posY, this.radius*2, this.radius*2);
  
        imgFicha.onload = draw;
        imgFicha.onload = function() {
        this.context.drawImage(imgFicha, this.posX, this.posY);
        
    }; 
    this.context.closePath();
    
    }
*/
    getRadius() {
        return this.radius;
    }
}