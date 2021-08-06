const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var base1,base2;
var player1,computer1;




function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  base1 = new playerBase(300,random(450,height-300),180,150);
  base2 = new computerBase(width-300,random(450,height-300),180,150);

  player1 = new player(285,base1.body.position.y-153,50,100);
  computer1 = new computer(width-280,base2.body.position.y-153,50,150);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  base1.display();
  base2.display();
   //display Player and computerplayer
  player1.display();
  computer1.display();

}
