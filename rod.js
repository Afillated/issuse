class rod{
    constructor(x,y,width,height,angle){
        var option={
            'restitution':0.8,
            'friction':1,
            'density':1.0,
            'isStatic':true
        };
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.height=height;
        this.width=width;
        Matter.Body.setAngle(this.body,angle)
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    };
};