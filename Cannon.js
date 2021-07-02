class Cannon{
  constructor(x,y,width,height){

    this.body = Bodies.rectangle(x,y,width,height);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    World.add(world,this.body)

  }
  
  display(){
    fill("#676e6a");
    push();
    translate(this.x,this.y);
    rotate(this.angle) 
    //rect(-10,20,this.width,this.height);
    arc(this.x-50,this.y+10,180,230,PI,TWO_PI);
    noFill();
    pop(); 
  }

  
}