
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObj;
var sideWall,sideWall2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	var ballOptions={
		isStatic:false,
		restitution:0,
		density:1.1,
		friction:0,
	}

	//Create the Bodies Here.
	ball=Bodies.circle(200,200,20,ballOptions);
	World.add(world,ball);

	

	groundObj=new ground(width/2,470,width,20);
	sideWall = new ground(400,440,20,40);
	sideWall2 = new ground(590,385,20,150);
	


	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);


  if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:1.3,y:-1.5});
   }
  
   //Code.org coordinate guide
   textSize(20);
   fill("red");
   text(mouseX+","+mouseY,mouseX,mouseY);

  

  groundObj.display();
  sideWall.display();
  sideWall2.display();


	
}

