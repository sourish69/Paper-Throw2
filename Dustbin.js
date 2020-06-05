class Dustbin
{
    constructor(x,y,width,height)
    {
        var options=
        {
            isStatic:true
        }
        this.image = loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;

        World.add(world,this.body)
    }
    display()
    {
        var pos = this.body.position;
        push()
        imageMode(CENTER);
        fill("blue");
        strokeWeight(4);
        stroke("blue");
        //rect(pos.x,pos.y,this.width,this.height);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}