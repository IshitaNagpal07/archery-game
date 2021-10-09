var bowImg,boardImg;
var bow,board;
var bg;
var canvas,edges;

function preload() {
 //bg = loadImage("ground-removebg-preview.png");
 bg =  loadImage("bg.png");
 bowImg = loadImage("bow2.png");
 boardImg = loadImage("board.png");

}

function setup() {
  //createCanvas(1000,500);
  canvas = createCanvas(displayWidth-20,displayHeight-30);

  board = createSprite(700,200);
  board.addImage("board",boardImg);
  board.scale=0.5;

  bow = createSprite(700,600);
  bow.addImage("bow",bowImg);
  bow.scale=0.7;

  edges=createEdgeSprites();
}

function draw() {
  background(bg);

  board.velocityX=-4;

 if(board.isTouching(edges)){
    board.velocityX=4;
  }

  getBouncingBox()

  camera.position.x = displayWidth/2;
  camera.position.y = displayHeight/2;
  //else{
    //
  //}

  //board.bounce(edges);
    
 // }(board.position>1200){

  fill("red");
  textSize(30);
  text("SCORE: ",1300,50);
  drawSprites();
}