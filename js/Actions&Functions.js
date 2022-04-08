window.onload = function () {
    const bg = new Background(canvas.width, canvas.height);
    const newHero = new Hero(100, 100, 50, 50);
    
    document.getElementById("begin-button").onclick = function () {
        if(!requestId){
            startGame();
        }
    };
    
    

    function startGame(){
        //audio.play()
        requestId = requestAnimationFrame(updateGame)
    }

    

    function gameOver(){
        console.log("you've died")
        audio.pause()
        bg.gameOver()
        requestId= undefined
    }

    function winGame(){
        audio.pause()
        bg.winGame()
        requestId = undefined
        
    }

    //game engine (updateGame)
    function updateGame(){
        frames ++;
        ctx.clearRect(0,0, canvas.width, canvas.height);
        bg.draw();
        newHero.draw();
        //newHero.newPos()
        generateChickens();
        drawChickens();
        drawbabyChickens();
        ctx.font= "50px Arial"
        ctx.fillText(`Loco Chickens: ${points}`,600,60)
        ctx.font= "50px Arial"
        ctx.fillText(`chicks: ${babyPoints}`,100, 60)


        if(requestId){
            requestAnimationFrame(updateGame);
        }
    }


    function generateChickens(){

        if(!(frames % 80=== 0)){
            return true 
        }

        const x = Math.floor(Math.random()* (canvas.width - 50))+ 100
        const y = Math.floor(Math.random() * (canvas.height - 50)) + 100
        const chicken1 = new PyroChicken(x,y,70,70)

        const babyX = Math.floor(Math.random()* (canvas.width - 50))+ 100
        const babyY = Math.floor(Math.random() * (canvas.height - 50)) + 100
        const chicken2 = new BabyChicken (babyX,babyY,30,30)
    

        pyroChickens.push(chicken1)
        babyChickens.push(chicken2)
    }

    function drawChickens(){

        pyroChickens.forEach((chicken, index_chicken)=>{
            if(chicken.x < -30){
                pyroChickens.splice(index_chicken, 1)
            }

            chicken.draw()
            if(newHero.collision(chicken)){
                gameOver()     
            }

            flames.forEach((flame, index_flame)=>{
                flame.draw()
                if(flame.collision(chicken)) {
                    points += 10
                    flames.splice(index_flame, 1)
                    pyroChickens.splice(index_chicken, 1)
                }
                if (points >= 150){
                    winGame()
                }
                if(flame.x + flame.width >= canvas.width){
                    flames.pop()
                }
            })
            
        })
    
    }
        function drawbabyChickens(){

            babyChickens.forEach((chicken, index_chicken)=>{
                if(chicken.x < -30){
                    babyChickens.splice(index_chicken, 1)
                }
    
                chicken.draw()
                if(newHero.collision(chicken)){
                    babyPoints += 1
                    babyChickens.splice(index_chicken, 1)
                } if(babyPoints >= 10 ){
                    winGame()

                }
    
                flames.forEach((flame, index_flame)=>{
                    flame.draw()
                    if(flame.collision(chicken)) {
                        gameOver()
                    
                    }
                    if(flame.x + flame.width >= canvas.width){
                        flames.pop()
                    }
                })
                
            })
        }


    

    function generateFlame(){
        const flamy = new Flames(newHero.x + newHero.width, newHero.y)

        if(!flames.length) {
            flames.push(flamy)
        }else{
            console.log("you still got flames")
        }
    }

    function resetGame() {}

 //event listeners for newHero 

    addEventListener("keydown", (e)=> {
        
        if(e.keyCode === 32){
            generateFlame()
        }
    });

    addEventListener("keydown", (event) => {
        event.preventDefault()// para que el screen no se mueva , solo el canvas. 
        if(event.keyCode === 38) {
            newHero.y -= 13
            console.log("arriba")
        }
        if(event.keyCode === 40) {
            newHero.y += 13
            console.log("abajo")
        }
        if(event.keyCode === 37) {
            console.log("izquierda")
            newHero.x -= 13
        }
        if(event.keyCode === 39) {
            console.log("derecha")
            newHero.x += 13
        }
                
    })     
                
        
    
    addEventListener("keyup", (e) => { 
        newHero.speedX = 2
        newHero.speedY = 2
    })

}


