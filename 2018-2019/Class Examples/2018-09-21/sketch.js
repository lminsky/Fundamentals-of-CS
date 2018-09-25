var h = 0;
var ellipseY = 0;
var ellipseD = 100;

function setup() {
  // put setup code here
  createCanvas(800, 600);
  background(200, 255, 200);


  colorMode(HSB);
}

function draw() {
  // put drawing code here
  // background(200, 255, 200);

  fill(h, 100, 100);
  h = (h+1)%360;

  ellipseY = ellipseY + 1;

  rectMode(CENTER);
  rect(0, 0, 100, 100);

  ellipseMode(CORNER);
  ellipse(000, ellipseY, ellipseD, ellipseD);
  ellipse(100, ellipseY, ellipseD, ellipseD);
  ellipse(200, ellipseY, ellipseD, ellipseD);
  ellipse(300, ellipseY, ellipseD, ellipseD);
  ellipse(400, ellipseY, ellipseD, ellipseD);
  ellipse(500, ellipseY, ellipseD, ellipseD);
}