
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Costraint;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var ground1;
var tree1;
var boy;
var elasticBand;
var stone1;

function preload()
{
	boyImage=loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
  ground1=new Ground(500,490,1000,20);
  tree1=new Tree(800,250,300,500);
  mango1=new Mango(800,200,50);
  mango2=new Mango(775,110,60);
  mango3=new Mango(700,150,50);
  mango4=new Mango(890,210,40);
  mango5=new Mango(760,210,20);
  mango6=new Mango(890,120,40);
  mango7=new Mango(820,110,40);
  mango8=new Mango(850,180,40);
  mango9=new Mango(710,210,50);
  mango10=new Mango(820,50,40);
  stone1=new Stone(100,200,30);
  boy=createSprite(150,425,80,130);
  boy.addImage(boyImage);
  boy.scale=0.1;
  elasticBand = new Elastic(stone1,{x: 120,y: 410});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground1.display();
  
  tree1.display();
  mango10.display();
  mango9.display();
  mango8.display();
  mango7.display();
  mango6.display();
  mango5.display();
  mango4.display();
  mango3.display();
  mango2.display();
  mango1.display();
  elasticBand.display();
  stone1.display();

  
 
  
  
  
  
  drawSprites();
 
}



