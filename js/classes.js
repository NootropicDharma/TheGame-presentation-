class Background {
    constructor(w,h,){
        this.x = 0;
        this.y = 0;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "images/pokemon_terrain.jpeg"
        this.gameOverPic = new Image();
        this.gameOverPic.src = "images/REALGAMEOVER.png"
        this.gameWonPic = new Image();
        this.gameWonPic.src ="images/greenWinny.webp"
    }

    draw(){
        if(this.x < -canvas.width) {
            this.x = 0
        
        }
        this.x --;
        
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(
            this.image,
            this.x + this.width,
            this.y, 
            this.width,
            this.height
        )
        
    }
   
    winGame(){
        ctx.drawImage(
            this.gameWonPic,
            300,
            200,
            400,
            200
        )
        ctx.font ="50px Tangerine" 
        ctx.fillStyle = "aqua";
        ctx.fillText(`You have saved the farm`,270,450)
        
    }

    gameOver(){
        ctx.drawImage(
            this.gameOverPic,
            300,
            200,
            400,
            200
        )
        ctx.font ="50px Tangerine" 
        ctx.fillStyle = "red";
        ctx.fillText("babyChickens are doomed",285,450)
        ctx.fillText("Refresh to play again!" ,285,500)
    }
}

//Hero 

class Hero {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.heroImage = new Image();
        this.heroImage.src = "images/Hero.png"
        this.speedyX = 0
        this.speedyY = 0
    }

    draw(){
        //this.x --;
        ctx.drawImage(
            this.heroImage,
            this.x,
            this.y,
            this.width,
            this.height
            
        )
    }

    collision(item) {
        return (// we need to come back here and change this later 
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y 
        )
    }
}

//pyroChickens

class PyroChicken {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.chickenImage = new Image();
        this.chickenImage.src = "images/chicken.png"
    }

    draw(){
        ctx.drawImage(this.chickenImage,
            this.x,
            this.y,
            this.width,
            this.height)
    }
}

class BabyChicken {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.chickenImage = new Image();
        this.chickenImage.src = "images/chickenbaby.png"
    }

    draw(){
        ctx.drawImage(this.chickenImage,
            this.x,
            this.y,
            this.width,
            this.height)
    }
}

class Flames {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.flameImage = new Image();
        this.flameImage.src = "images/bluefire.png"
    }

    draw(){
        this.x += 3;
        ctx.drawImage(this.flameImage,
            this.x,
            this.y,
            this.width,
            this.height)
    }
    collision(item) {
        return (// we need to come back here and change this later 
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y 
        )
    }
}


class Tree {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.treeImage = new Image();
        this.treeImage.src = "images/tree.jpeg"
    }

    draw(){
        ctx.drawImage(
            this.treeImage,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}


