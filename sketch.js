var fr,mr;
var o1,o2;
function setup() {
  createCanvas(1200,1400);
  fr = createSprite(100, 400, 50, 80);
  fr.shapeColor = "orange";
  mr = createSprite(200,200,80,30);
  mr.shapeColor = "yellow";

  o1 = createSprite(400,900,50,80);
  o1.velocityY = -5;
  o2 = createSprite(200,400,80,80);
  o2.velocityY = 5;
}

function draw() {
  background(255,255,255);  

bounceoff(o1,o2);

drawSprites();
}

