class Ficha{
    
    constructor(posX,posY,radius,fill,player,context){
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.fill = fill;
        this.player = player;
        this.ctx = context;
        this.image = new Image();
    }; 

    getPosition (){
        return {
            x: this.getPostX(),
            y: this.getPostY()
        };
    };

    getRadius(){
        return this.radius;
    };

    getPlayer(){
        return this.player;
    };

    setRadius(radius){
        this.radius = radius;
    }

    setPosition(x,y) {
        this.posX = x;
        this.posY=y;
    };

    setFill(fill){
        this.fill = fill;
    };

    setPlayer(player){
        this.player = player;
    }

   draw(){
        //console.log(this.fill);
        this.ctx.fillStyle= this.fill;
        this.ctx.beginPath();
        this.ctx.arc(this.posX,this.posY,this.radius,0,2*Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    }



}