
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustbin1;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper1 = createSprite (100,300,10,10);
	dustbin1 = createSprite (300,300,10,20);

	Matter.Bodies.circle (x, y, 70, options, maxSlides);

	function keyPressed() {
		if (keyCode === UP_ARROW) {
		  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		}
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  dustbin1.display();

  drawSprites();
 
}



