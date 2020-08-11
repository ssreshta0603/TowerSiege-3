class Polygon{
    constructor(x,y) {
        var options = {
            restitution:0.5,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.circle(x,y,20,options);
        
        this.image = image
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
      
        push();
        var pos = this.body.position;
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
      }
}

