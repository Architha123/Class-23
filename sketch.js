const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower;
var ground;
var cannon;
var bgImage;

function preload(){
 bgImage=loadImage("assets/background.gif");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,590,1200,20);
    tower = new Tower(150,350,160,310);
    cannon = new Cannon(100,100,100,100);

}

function draw(){
    background(220);
    image(bgImage,0,0,width,height);
    Engine.update(engine);

    ground.display();
    tower.display();
    cannon.display();

   
}
