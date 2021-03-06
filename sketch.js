const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,ball,ball2,ball3,ball4,ball5,rope1,rope2,rope3,rope4,rope5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,330,20,roof_options);
    World.add(world,roof);

var ball_options = {
	restitution:0.9
	
}

ball = Bodies.circle(320,400,15,ball_options);
World.add(world,ball)

ball2 = Bodies.circle(360,400,15,ball_options);
World.add(world,ball2);

ball3 = Bodies.circle(400,400,15,ball_options);
World.add(world,ball3);

ball4 = Bodies.circle(440,400,15,ball_options);
World.add(world,ball4);

ball5 = Bodies.circle(480,400,15,ball_options);
World.add(world,ball5);

rope1=new rope(ball,roof,-70, 0);
 rope2=new rope(ball2,roof,-50, 0);
  rope3=new rope(ball3,roof,-30, 0) ;
  rope4=new rope(ball4,roof,-10, 0);
 rope5=new rope(ball5,roof,10, 0);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,400,20);

  //call display() to show ropes here
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  
  //create ellipse shape for multiple bobs here
ellipse(ball.position.x,ball.position.y,15);
ellipse(ball2.position.x,ball2.position.y,15); 
ellipse(ball3.position.x,ball3.position.y,15);
ellipse(ball4.position.x,ball4.position.y,15);
ellipse(ball5.position.x,ball5.position.y,15);



}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0})
	}
}