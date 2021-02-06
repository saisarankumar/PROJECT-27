class Bob{
    constructor(x, y) {
        var options = {
            'restitution':1,
            'friction':5,
            'density':1
        }
        this.body = Bodies.circle(x, y, 40, options);
        this.radius = 40;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0, 0, 40, 40);
        pop();
      }
}