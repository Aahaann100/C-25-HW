class paper
{
    constructor(r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:1,
            density:1.2

            
        }
        this.image=loadImage("paper.png")
        this.r=r
        this.body=Bodies.circle(300, 400, 40, options);
 		World.add(world, this.body);


    
    
    }
display(){
    var rubberpos=this.body.position
    push()
    translate(rubberpos.x, rubberpos.y);
    rotate(this.body.angle)
    rectMode(CENTER)
    strokeWeight(4);
    stroke("black");
    fill("darkblue");
    //draw the ellipse here to display the rubber ball
    //ellipse(0,0,80)
    imageMode(CENTER)
    image(this.image,0,0,80,80)
    pop()




}

}