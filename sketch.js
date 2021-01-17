const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var canvas;
var engine,world;
function setup()
{
canvas=createCanvas(600,600);
engine=Engine.create();
world=engine.world;

var object_options= {restitution : 1}
object=Bodies.rectangle(200,200,50,50,object_options);

var ground_options= {isStatic: true}
ground=Bodies.rectangle(200,590,50,50,ground_options);
//console.log(object.type);
//console.log(object.position.x);
//console.log(object.position.y);
var ball_options={restitution : 1}
ball= Bodies.circle(200,100,20,ball_options);

World.add(world,object);
World.add(world,ground);
World.add(world,ball);
console.log(object);
}

function draw()
{
background("gold");
Engine.update(engine);
rectMode(CENTER);
ellipseMode(RADIUS);
//rect(300,300,50,50);
rect(object.position.x,object.position.y,50,50);
rect(ground.position.x,ground.position.y,600,20);
circle(ball.position.x,ball.position.y,20,20);
}