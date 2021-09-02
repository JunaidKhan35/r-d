var gameState = 0
var runner,runnerImg;
var ground;
var cloud,cloudImg;
var obstacles,obstacleImg1,obstacleImg2;
var bgImg;

function preload() {
  cloudImg = loadImage("sprites/cloud2.png");
  obstacleImg1 = loadImage("new obstacle1.png");
  obstacleImg2 = loadImage("new obstacle2.png");
  running = loadAnimation("sprites/runner1.png","sprites/runner2.png","sprites/runner3.png","sprites/runner4.png","sprites/runner5.png","sprites/runner6.png","sprites/runner7.png","sprites/runner8.png","sprites/runner9.png");
  runnerJ = loadImage("sprites/wood1.png");
  bgImg = loadImage("sprites/bg.jpg")
}

function setup(){
  createCanvas(590,380)

  score = 0
  score.depth = 20
  
  cloud = createSprite(1000,30,25,25)
  cloud.scale = 0.8
  cloud.addImage(cloudImg)

  obstacles = createSprite(800,300,20,20);
  obstacles.addImage(obstacleImg1)
  obstacles.velocityX = -4

  obstacles2 = createSprite(1120,305,20,20)
  obstacles2.addImage(obstacleImg2)
  obstacles2.velocityX = -4

  runner = createSprite(55,200,20,20)
  runner.addAnimation("RUniNG",running)
  runner.scale = 0.4
  runner.depth = 0.15
  
  ground = createSprite(420,355,100000000,69)
  ground.shapeColor = rgb(50,75,100)
  ground.depth = 0.10

  bg = createSprite(295,65,25,25);
  bg.addImage(bgImg);
  bg.scale = 2.0
  bg.depth = 0.1
  
}

function draw(){
  background(200)

  obstacles.scale = 0.9
  
  //runner.display();
  //ground.display();
  fill("white")
  textSize(35)
  text("Score:" + score, 50,100)
 
  //camera.position.x = runner.x

  if(runner.x-obstacles.x>400){
   obstacles.x = runner.x+400 
  }

  if(runner.x-obstacles2.x>500){
    obstacles2.x = runner.x+800 
   }

  if(frameCount%40 === 0){
    score = score+1
  }

  if(keyDown("SPACE")){
       runner.addImage(runnerJ) 
       runner.velocityY = -8

  }

  runner.velocityY = runner.velocityY - -0.6
  runner.collide(ground)

  if(runner.isTouching(obstacles)){
    gameState = 2
    console.log(gameState)
  }

  //if(gameState === 2){
  //  runner.velocityX = 0;
  //  obstacles.velocityX = 0;
   // CLOUD.velocityX = 0;
  //}

  if (bg.x < 0){
    bg.x = width/4
  }

  bg.velocityX = -(1 + 3* score/500)

  
  drawSprites();
}

