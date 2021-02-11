var bgice;
var bgfire, bgstone;
var ip1img, ip2img, ip3img, ip4img, ip5img;
var ip1, ip2,ip3,ip4,ip5, ip6;
var player, playerimg;
var iobs1, iobs2;
var iobs1img, iobs2img;
var iobs3;
var ir1, ir2, ir3, ir4, ir5;
var irimg;
var ibox1, ibox2, ibox3, ibox4;
var iboximg;
var door, doorimg;
var ig;
var player_jump;
var player_stand;
var player_crawl;
var gameState = 1;
var score=0;
var gameover;
var gameoversprite;
//variables
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  bgice = loadImage("images/iceage/bgice.jpg");
  //bgfire = loadImage("iceage/bgice.png");
  //bgstone = loadImage("iceage/bgice.png");
  ip1img = loadImage("images/iceage/iceplatformnarrow.png");
  ip2img = loadImage("images/iceage/icesingleplatform.png");
  iobs1img = loadImage("images/iceage/ice.png");
  iobs2img = loadImage("images/iceage/spikes.png");
  irimg = loadImage("images/iceage/diamond.png");
  iboximg = loadImage("images/iceage/icebox.png");
  doorimg = loadImage("images/player/door.png");
  playerimg = loadAnimation("images/player/run1.png", "images/player/run2.png");
  player_jump = loadAnimation("images/player/jump up.png");
  player_stand = loadAnimation("images/player/stand.png");
  player_crawl = loadAnimation("images/player/fall.png");
  gameover = loadImage("images/player/gameover.png")

}

// setup

function setup() {
  createCanvas(800,630);

  
  player = createSprite(100,500,200,200);
  player.addAnimation("standing",player_stand);

  player.scale =0.6;

  player.addAnimation("running",playerimg);
  
  player.addAnimation("jumping",player_jump);
  player.addAnimation("crawling",player_crawl);
  
  gameoversprite = createSprite(400,300,0,0);
  gameoversprite.addImage(gameover);
  gameoversprite.visible=false;
  gameoversprite.scale=0.5;

  ip2 = createSprite(735, 575, 50, 50);
  ip2.addImage(ip2img);
  //ig = createSprite(735, 500, 128, 10);
  

  ip1 = createSprite(255, 580, 100, 100);
  ip1.addImage(ip1img);
  //ig = createSprite(255, 510, 500, 10);
  

  ip3 = createSprite(255, 360, 200, 80);
  ip3.addImage(ip1img);
  //ig = createSprite(255, 297, 500, 10);
  ip3.setCollider("rectangle", 0, -5,  ip3.width, ip3.height);
  ip3.debug = false;

  ip4 = createSprite(570, 360, 50, 50);
  ip4.addImage(ip2img);
  //ig = createSprite(570, 295, 128, 10);
 

  ip5 = createSprite(540, 130, 100, 100);
  ip5.addImage(ip1img);
  ip5.setCollider("rectangle", 0, -5,  ip5.width, ip5.height);
  ip5.debug = false;
  //ig = createSprite(540, 89, 500, 10);

  ip6 = createSprite(60, 135, 50, 50);
  ip6.addImage(ip2img);
  //ig = createSprite(60, 90, 128, 10);
  

  iobs1 = createSprite(480,210,100,100);
  iobs1.addImage(iobs1img);
  iobs1.scale=0.19;
  iobs1.setCollider("rectangle", 0, 0, iobs1.width, iobs1.height-290);
  iobs1.debug = false;
  

  iobs2 = createSprite(270,513,50,50);
  iobs2.addImage(iobs2img);
  iobs2.scale=0.2;
  iobs2.setCollider("rectangle", 0, 0, iobs2.width, iobs2.height-290);
  iobs2.debug = false;
  

  iobs3 = createSprite(500,68,50,50);
  iobs3.addImage(iobs2img);
  iobs3.scale=0.15;
  iobs3.setCollider("rectangle", 0, 0, iobs3.width, iobs3.height-290);
  iobs3.debug = false;

  ir1 = createSprite(580,540,100,100);
  ir1.addImage(irimg);
  ir1.scale=0.15;
  

  ir2 = createSprite(580,250,100,100);
  ir2.addImage(irimg);
  ir2.scale=0.1;

  ir3 = createSprite(100,250,100,100);
  ir3.addImage(irimg);
  ir3.scale=0.1;

  ir4 = createSprite(60,50,100,100);
  ir4.addImage(irimg);
  ir4.scale=0.1;

  ir5 = createSprite(400,50,100,100);
  ir5.addImage(irimg);
  ir5.scale=0.1;


  ibox1 = createSprite(770,495,50,50);
  ibox1.addImage(iboximg);
  ibox1.scale=0.5;
  //ig = createSprite(770, 437,55, 5);

  ibox2 = createSprite(663,383,50,50);
  ibox2.addImage(iboximg);
  ibox2.scale=0.5;
  //ig = createSprite(480, 160,100, 10);

 ibox3 = createSprite(210,282,50,50);
  ibox3.addImage(iboximg);
  ibox3.scale=0.6;
  ibox3.setCollider("rectangle", 0, -5,  ibox3.width, ibox3.height-10);
  ibox3.debug = false;
  //ig = createSprite(480, 160,100, 10);

  ibox4 = createSprite(200,232,50,50);
  ibox4.addImage(iboximg);
  ibox4.scale=0.3;
  ibox4.setCollider("rectangle", 0, -5,  ibox4.width, ibox4.height-10);
  ibox4.debug = false;
  //ig = createSprite(480, 160,100, 10);

  door = createSprite(750,45,100,100);
  door.addImage(doorimg);
  door.scale=0.13;


  player.setCollider("rectangle", 0, 0, player.width-10, player.height+80);
  player.debug = false;
}

function draw() {
  background(bgice);
  createEdgeSprites();

  
    if(gameState===PLAY){
    ip1.display();
    ip2.display();
    ip3.display();
    ip4.display();
    ip5.display();
    ip6.display();
    iobs1.display();
    iobs2.display();
    iobs3.display();
    ir1.display();
    ir2.display();
    ir3.display();
    ir4.display();
    ir5.display();
    ibox1.display();
    ibox2.display();
    ibox3.display();
    ibox4.display();
    door.display();
    player.display();
    
    console.log(PLAY);
    player.changeAnimation("standing",player_stand);
    player.velocityX=0;
  
  
    if(keyDown(UP_ARROW)){
      player.velocityY = -4;
      player.changeAnimation("jumping",player_jump);
    }
    if(keyDown(DOWN_ARROW)){
      player.velocityY = 7;
      player.changeAnimation("crawling",player_crawl);
    }
    if(keyDown(LEFT_ARROW)){
      player.velocityX = -5;
      player.changeAnimation("running",playerimg);
    }
  
    if(keyDown(RIGHT_ARROW)){
      player.velocityX = 4;
      player.changeAnimation("running",playerimg);
      
    }
  
   
  
    player.velocityY = player.velocityY +0.5;
  
    
    player.collide(ip1);
    player.collide(ip2);
    player.collide(ip3);
    player.collide(ip4);
    player.collide(ip5);
    player.collide(ip6);
    player.collide(ibox1);
    player.collide(ibox2);
    player.collide(ibox3);
    player.collide(ibox4);
    
    player.depth +=1;

    if(player.isTouching(ir1)){
      score++;
      ir1.destroy();
     }
     if(player.isTouching(ir2)){
      score++;
      ir2.destroy();
     }
     if(player.isTouching(ir3)){
      score++;
      ir3.destroy();
     }
     if(player.isTouching(ir4)){
      score++;
      ir4.destroy();
     }
     if(player.isTouching(ir5)){
      score++;
      ir5.destroy();
     }

     if(player.isTouching(iobs1)){
      gameState=END;
      
    }
    if(player.isTouching(iobs2)){
      gameState=END;
     
    }
    if(player.isTouching(iobs3)){
      gameState=END;
      
    }


    
    }else if (gameState===END) {
      endState();
    }

  


  gameoversprite.depth +=1;
  drawSprites();

  stroke(50);
  fill("white");
  textSize(30);
  text("Score: " + score, 160, 50);
}


function endState(){
  
  gameoversprite.visible=true;
    ip1.destroy();
      ip2.destroy();
      ip3.destroy();
      ip4.destroy();
      ip5.destroy();
      ip6.destroy();
      iobs1.destroy();
      iobs2.destroy();
      iobs3.destroy();
      ir1.destroy();
      ir2.destroy();
      ir3.destroy();
      ir4.destroy();
      ir5.destroy();
      ibox1.destroy();
      ibox2.destroy();
      ibox3.destroy();
      ibox4.destroy();
      door.destroy();
      player.destroy();
  }
