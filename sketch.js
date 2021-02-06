
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobDiameter = 160;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var ground;
	
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 150, 500, 40);

	bobObject1 = new Bob(330, 420);
	bobObject2 = new Bob(370, 430);
	bobObject3 = new Bob(410, 435);
	bobObject4 = new Bob(450, 435);
	bobObject5 = new Bob(490, 430);

	rope1 = new Rope(bobObject1.body, ground.body, -bobDiameter*1, 0);
	rope2 = new Rope(bobObject2.body, ground.body, -bobDiameter*0.5, 0);
	rope3 = new Rope(bobObject3.body, ground.body, -bobDiameter*0.0, 0);
	rope4 = new Rope(bobObject4.body, ground.body, bobDiameter*0.5, 0);
	rope5 = new Rope(bobObject5.body, ground.body, bobDiameter*1, 0);

	Engine.run(engine);
  
}


function draw() {

  background("lightblue");

  rectMode(CENTER);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();  
  ground.display();
  
  drawSprites();
 
}
function keyPressed()	{
	//give controls for paperObj
	if(keyCode===LEFT_ARROW)	{
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-460,y:-0});
	}
  }
  