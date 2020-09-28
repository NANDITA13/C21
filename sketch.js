var bullet ;

var wall ;

var thickness;

var speed , weight ;



function setup() {

  createCanvas(1200,400);
  
  
 
  
  thickness = random (22,83);
  speed = random (223,321);
  weight = random (30,52);

  
  wall = createSprite (1000,200,thickness,height/2);
  wall.shapeColor = color (80,80,80)

  bullet = createSprite (400,200,50,13);
  bullet.velocityX = speed ;
  bullet.shapeColor = color ("white");
  
 

   
  


 
  
  
}




function draw() {


  background(0);  

  bullet.collide (wall);


if ( wall.x- bullet.x  <= (bullet.width+wall.width)/2) {

  bullet.velocityX = 0;
  var deformation = 0.5*weight * speed * speed/222509;

  if ( deformation > 180) {

    bullet.shapeColor = colour (255,0,0);
    bullet.velocityX = 0;

  }

  if (deformation <180 && deformation >100){

    bullet.shapeColor = color (230,230,0)
    bullet.velocityX = 0;
  }

  if(deformation < 100){

    bullet.shapeColor = color (0,225,0);
    bullet.velocityX = 0;
  }
}

function hasCollided (lbullet , lwall) {

  bulletRightEdge = lbullet.x + lbullet.width;

  wallLeftEdge = lwall.x;

  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }

  return false;
}

if (hasCollided (bullet , wall)) {

  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  
  if (damage > 10) {

    wall.shapeColor = color (255,0,0);
  }

  if (damage  <10){

    wall.shapeColor = color (0,255,0);
    
  }
}


drawSprites ();

}




