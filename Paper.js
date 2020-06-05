class Paper
{
    constructor()
    {
        var options= 
        {
            'isStatic':false,
            'restitution':0.1,
            'friction':0.5,
            'density':1.2

        }

        this.image = loadImage("paper.png");
        this.body = Bodies.rectangle(100,100,35,35);
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        push()
        fill("white");
        strokeWeight(4);
        stroke("green");
        image(this.image,pos.x,pos.y,35,35);
        pop()
    }
    
}