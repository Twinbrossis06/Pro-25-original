const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper,dustbin1,dustbin2,dustbin3;
var paper,paperBody;
var paperImg;
var bin,binImg;
var p,Pi;

function preload()
{
 binImg=loadImage("Sprites/dustbingreen.png");

}

function setup() {
	createCanvas(1500, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2,height-50,1500,15);

  bin=createSprite(1330,400,180,12);
  bin.addImage(binImg);
  bin.scale=0.9;

  dustbin1=new Dustbin(width-168,height-65,180,12);
  
	dustbin2=new Dustbin(width-78,height-115,12,100);

  dustbin3=new Dustbin(width-258,height-115,12,100);
  
  

  paper=new Paper(100,height-185,30,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("cyan");
  stroke(500);
  text("PRESS UP_ARROW TO MOVE THE PAPER",470,100);
  text("AND ANY OTHER KEY TO MOVE IT DOWN TOWARDS THE DUSTBIN",430,130);

  keyPressed();
  drawSprites();
  
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-2});
	}
}