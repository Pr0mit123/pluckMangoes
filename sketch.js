
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImage
var mangoImage
var treeImage
var stoneImage
function preload()
{
	boyImage = loadImage (Pluckingmangoes/boy.png);
	mangoImage = loadImage (Pluckingmangoes/mango.png);	
	stoneImage = loadImage (Pluckingmangoes/stone.png);	
	treeImage = loadImage (Pluckingmangoes/tree.png);	

}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



