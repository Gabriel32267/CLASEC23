 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;

var engine;
var world; 
var pelota;
var suelo;
//Crear espacio de nombre para Engine
//Crear espacio de nombre para World
//Crear espacio de nombre para Bodies
//Crear espacio de nombre para Body


function setup() {
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var opsions ={
  restitution: 2, 
  frictionAir: 0.05
}
var opsion_dos ={
isStatic: true
}
pelota = Bodies.circle(20,20,30,opsions);
World.add(world,pelota);

suelo = Bodies.rectangle(100,400,400,20,opsion_dos);
World.add(world,suelo);
}
rectMode(CENTER);
function draw() 
{
  background(51);
Engine.update(engine);
ellipse(pelota.position.x,pelota.position.y,30);
rect(suelo.position.x,suelo.position.y,400,20);

  
  
}

