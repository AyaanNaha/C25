class Boat {
    constructor(x,y,w,h,pos) {
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.pos=pos;

        this.options = {
            restitution:0.8,
            density:1.0,
            friction:1.0
        };

        this.body = Bodies.rectangle(x,y,w,h,this.options);

        this.image = loadImage("./assets/boat.png");

        World.add(world,this.body);
    }

    display() {
        push();
        
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,this.pos,this.w,this.h);

        pop();
    }
}