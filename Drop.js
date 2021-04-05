class Drop{

constructor(x, Y){

        
 
 
}
}
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world, this.body);
        {
this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        
        World.add(world, this.body);



    


        display(){      
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x, pos.y, this.radius, this.radius);

    }
}

for(var i=0; i<maxDrops; i++){

    maxDrops.push(new createDrop(random(0, 400,) (0, 400)))

}
