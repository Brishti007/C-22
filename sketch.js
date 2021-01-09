const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball , ball2 , ball3;

function setup() {
  var canvas=createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  options_ground={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,options_ground);
  World.add(world,ground);
  console.log(ground);

options_ball={
restitution:1.5
}

ball = Bodies.circle(200,100,20,options_ball);

World.add(world , ball);

options_ball2={
  restitution:1.0
}

ball2 = Bodies.circle(50,150,40,options_ball2);

World.add(world , ball2);

options_ball3={
  restitution:1.0
}
ball3=Bodies.circle(300,100,30,options_ball3);
World.add(world,ball3);

}

function draw() {
  background(0);
  Engine.update(engine) ;
  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,600,50)

ellipseMode(RADIUS);
ellipse(ball.position.x , ball.position.y , 20 );
ellipseMode(RADIUS);
ellipse(ball2.position.x , ball2.position.y , 40);

ellipse(ball3.position.x,ball3.position.y,30);

}