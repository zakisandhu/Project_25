class Ball{
    constructor(x,y,r){
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,r, options);
        this.image = loadImage("paper.png")
        this.r = r
        World.add(world, this.body)
    }
    display(){
        var pos=this.body.position;		
        var angle = this.body.angle
			push()
			translate(pos.x, pos.y);
            rotate(angle)
			imageMode(CENTER)
			image(this.image,0,0,this.r*2)
			pop()
    }

}