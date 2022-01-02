 var universe2Img,universe2,universebg1,universebg1Img,Asteroid1,Asteroid1Img;
 var RocketImg,Rocket,leftboundary,rightboundary;
 
 function preload(){
  universe2Img = loadImage("universe 2.png");
  universebg1Img = loadAnimation("universebg-1.png")
  RocketImg = loadImage("Rocket.png");
  Asteroid1Img = loadImage("Asteroid1.png");
}
function setup() {
    createCanvas(400,400);
    universe2 = createSprite(200,200);
    universe2.addImage("universe 2",universe2Img);
    universe2.y = universe2.width /2;
    universe2.velocityY = 5;
    
    Rocket = createSprite(200,350);
    Rocket.addImage("Rocket",RocketImg);
    Rocket.scale = 0.1;

    leftboundary = createSprite(35,0,50,800);
    leftboundary.visible = false;

    rightboundary = createSprite(365,0,50,800);
    rightboundary.visible = false;

 }

function draw() {
  if(keyDown(RIGHT_ARROW)){
    Rocket.velocityX += 5;
  }
    if(keyDown(LEFT_ARROW)){
      Rocket.velocityX -= 5;
  }
  var select_Asteroid = Math.round(random(1,4));
  if(World.frameCount % 100 == 0){
    switch(select_Asteroid){
      case 1: Asteroid1();
      break;
      default:break;
    }
  }
  
  Rocket.collide(leftboundary);
  Rocket.collide(rightboundary);

  if(universe2.y > 400){
     universe2.y = height/2;
  }
  
  Asteroid1()
  drawSprites()
}
function Asteroid1(){
  var Asteroid = createSprite(0,Math.round(random(20,370)),10,10);
  Asteroid.addImage(Asteroid1Img);
  Asteroid.velocityY = 1;
  Asteroid.lifetime = 100;
  Asteroid.scale = 0.1;

}
