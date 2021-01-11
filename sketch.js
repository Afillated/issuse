const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var paper1
function preload()
{
	image1=loadImage("polygon.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
	polygon1=new polygon(200,200)
	img=createSprite(200,200,20,20)
	img.addImage(image1)
	img.scale=0.175
	rod1=new rod(600,400,150,20);
	boby3=Bodies.rectangle(300,300,20,20,{isStatic:true})
	World.add(world,boby3)
	slingshot1= new slingshot(this.polygon1,{x:200, y:350})
	
	
	//sling = Constraint.create(polygon1,boby3);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	img.x=mouseX
	img.y=mouseY
  polygon1.display();
  rod1.display();
  drawSprites();
 
}




