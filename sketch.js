var Paper1, Roof1, dustbin1, dustbin2, dustbin3, dustbin2Img, bg1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;



function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper();
	ground = new Ground(200,680,2000,10);
	dustbin2 = new Dustbin(500,550,170,240);

	Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255,255,255);
  paper1.display(); 
  ground.display();
  dustbin2.display();
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.03,y:-0.07})
	}
}

/*function mouseDragged()
{
	Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
	launcher1.fly();
}*/


