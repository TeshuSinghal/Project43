hr = hour();
mn = minute();
sc = second();
angleMode(DEGREES);

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(255,255,255);  
  scAngle = map(sc, 0, 60,0, 360);
  mnAngle = map(mn, 0, 60,0, 720);
  hrAngle = map(hr, 0, 12,0, 12);
  arc(50, 55, 50, 50, 0, HALF_PI);
  arc(50, 55, 60, 60, HALF_PI, PI);
  arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
  arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
  push();
  rotate(scAngle);
  translate(position.x, position.y);
  stroke(255,0,0);
  strokeWeight(7);
  line(0, 0,100,0);
  drawSprites();
}