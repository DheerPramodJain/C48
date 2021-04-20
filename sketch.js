var player;
var maincar;
var ground,groundimg;
var brake,brakeimg;
var accelerator,acceleratorimg;
var score = 0

function preload() {
    maincarimg = loadImage("images/bluecar.png")
    groundimg = loadImage("images/ground2.png")
    brakeimg = loadImage("images/brake.png")
    acceleratorimg = loadImage("images/accelerator.png")
    coinsimg = loadImage("images/coin.png")
    car2img = loadImage("images/ferrari.png")
    car3img = loadImage("images/ferrarif1.png")
}

function setup() {
    createCanvas(displayWidth,displayHeight- 133)

   maincar = createSprite(displayWidth/2 -400,displayHeight -210) 
   maincar.addImage(maincarimg)
   maincar.scale = 0.5

   ground = createSprite(0,displayHeight -150,displayWidth,5)
   ground.addImage(groundimg)
   ground.velocityX = -4

   brake = createSprite(displayWidth -150,displayHeight -200)
   brake.addImage(brakeimg)
   brake.scale = 0.4

   
   accelerator = createSprite(displayWidth/2 -600,displayHeight -200)
   accelerator.addImage(acceleratorimg)
   accelerator.scale = 0.4


   coinssGroup = new Group()
}

function draw() {
    background("black")
    if(mousePressedOver(accelerator)){
        maincar.x = displayWidth/2 + random(0,300)
    }
    if(mousePressedOver(brake)){
        maincar.x = displayWidth/2 - random(0,300)
    }
     //restting the ground
     if(ground.x<500){
         ground.x = ground.width/2
     }
     spawnCoins()
    drawSprites()
    textSize(20)
    fill("White")
    text("Score:$"+score,displayWidth/2,30)
    if(score >= 200 && score < 400){
        maincar.addImage(car2img)
        maincar.scale = 1.4
        maincar.x = displayWidth/2 -300
        maincar.y = displayHeight -190
    }
    else if(score>= 400){
        maincar.addImage(car3img)
        maincar.scale = 1.4
        maincar.x = displayWidth/2 -300
    }
}
function spawnCoins () {
    //write code here to spawn the coins
    if (frameCount % 100 === 0) {
      var coins = createSprite(displayWidth-340,displayHeight-180,displayWidth,5);
      coins.y = Math.round(random(displayHeight-160,displayHeight-190));
      coins.addImage(coinsimg);
      coins.scale = 0.1;
      coins.velocityX = -3;
      
       //assign lifetime to the variable
      coins.lifetime = 220;
      
      //adjust the depth
      //cloud.depth = trex.depth;
      //trex.depth = trex.depth + 1;
      
      //add each cloud to the group
      coinssGroup.add(coins);
      score = score+100
    }
    
  }
  