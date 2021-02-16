var ball;
var box1;
var box2;
var box3;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);

	ground=new Ground(400, 650, 800, 20);
	ball=new Ball(200, 450);
	 
	//box1= new Box()

   
}


function draw() {
  background(0);
  rectMode(CENTER);
 
  ground.display();
  ball.display();
  

  drawSprites();
  
 
 
}

 function KeyPressed() {
	 if (keyCode === UP_ARROW){
		 Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	 }
 }



