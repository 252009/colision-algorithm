var moving,notmoving

function setup() {
  createCanvas(1200,400);
  notmoving = createSprite(200, 200, 100, 50);
  moving = createSprite(200,300,20,100)
}

function draw() {
  
  background(255,255,255);  
  drawSprites();
  moving.x = mouseX
  moving.y = mouseY

  if(moving.x - notmoving.x < moving.width/2 + notmoving.width/2 && notmoving.x - moving.x < moving.width/2 + notmoving.width/2 && 
    notmoving.y - moving.y < moving.width/2 + notmoving.width/2 && moving.y - notmoving.y < moving.width/2 + notmoving.width/2)
  {
    moving.shapeColor = "green"
    notmoving.shapeColor = "yellow"
  }
  else
  {
    moving.shapeColor = "grey"
    notmoving.shapeColor = "grey"
  }
}