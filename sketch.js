const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var box2
var engine, world, box1,ground1;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(20, 100, 60,70);
  box2 = new Box(30,70,50,80);
  ground1=new ground(200,390,400,10);

 
  
  
}

function draw() {
  background("pink"); 
  Engine.update(engine) 
  
    
  box1.display();
  box2.display();
  ground1.display();
  }