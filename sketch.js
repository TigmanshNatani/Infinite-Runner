 var Mbackground,Mobstacle,marios,Mcloud1,upboundary,bottomboundary,reset,coin;
 var MbackgroundImg,MobstacleImg,marioImg,mario1Img,mario_running,Mcloud1Img,resetImg,coinImg;
 var score = 0;

 function preload(){
  MbackgroundImg = loadImage("M.background.png");
  MobstacleImg = loadImage("M.obstacle.png");
  mario_running = loadImage("mario1.png","mario.png");
  Mcloud1Img = loadImage("M.cloud1.png");
  resetImg = loadImage("reset button.png");
  coinImg = loadImage("coin.png");
}
function setup() {
    createCanvas(400,600);

    Mbackground = createSprite(400,300);
    Mbackground.addImage(MbackgroundImg);
    Mbackground.scale = 0.3;

    Mobstacle = createSprite(350,435);
    Mobstacle.addImage(MobstacleImg);
    Mobstacle.scale = 0.13;

    marios = createSprite(100,405,10,10);
    marios.addImage(mario_running);
    marios.scale = 0.2;
  
    reset = createSprite(200,125,5,5);
    reset.addImage(resetImg);
    reset.scale = 0.05;
     
      score = 0;
 }

function draw() {
  background("white");
  textSize(25);
  fill("green");
  stroke("yellow");
  text("score:"+score,50,50);


  Mobstacle.setCollider("circle",0,0,100); 

  if(keyDown(UP_ARROW)){
    marios.velocityY = -15;
  }
  if(marios.y < 250){
     marios.velocityY = 15;
   }
  if(marios.y > 405){
     marios.velocityY = 0;
   }
  if(keyDown(UP_ARROW)){
   if(marios.y > 405){
     marios.velocityY = -15;
   }
  }
  if(keyDown("space")){
    Mbackground.velocityX = -15;
    Mobstacle.velocityX = -15;
   // Mcloud1.velocityX = -5;
   // coin.velocityX = -10;                  
  }
  
  // if mario waill tought the obstacle, then what will happen?
  if(marios.isTouching(Mobstacle)){
   Mbackground.velocityX = -0;
   Mobstacle.velocityX = -0;
   Mcloud1.velocityX = -0;
   marios.velocityY = -0;
   coin.velocityX = -0;
   textSize(19);
   stroke("red");
   text("OH! You Lost " ,200,50);
  }

  if(Mbackground.x < 0){
     Mbackground.x = width/4;
  }
  if(Mobstacle.x < 0){
    Mobstacle.x = width/1;
  }
 /* if(Mcloud1.x < 0){
    Mcloud1.x = width/2;

  }*/
  if(marios.x < 0){
    marios.x = width/2;
  }
 /* if(coin.x < 0){
    coin.x = width/2;
  }*/

 /* if(marios.isTouching(coin)){
    score = score+1;
  }*/
  
  
  spawnCoins();
 spawnClouds();
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
  if(frameCount%100===0){
    // write your code here 
 Mcloud1=createSprite(375,600,10,10);
 Mcloud1.y = random(100,275);
 Mcloud1.velocityX=-5;
 Mcloud1.addImage(Mcloud1Img);
 Mcloud1.depth = marios.depth;
 marios.depth=marios.depth+1;
  }
}
function spawnCoins(){
  if(frameCount%50===0){
    coin = createSprite(400,600,10,10);
    coin.y = random(200,475);
    coin.velocityX = -10;
    coin.addImage(coinImg);
    coin.setCollider("circle",0,0,100);
    coin.scale = 0.3;
    coin.depth = marios.depth;
    marios.depth = marios.depth+1;   
  }
}
