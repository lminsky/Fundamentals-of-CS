function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  blendMode(LIGHTEST);
  fill(255, 0, 0, 255);
  ellipse(width/2, height/2-100, 300, 300);
  fill(0, 255, 0, 255);
  ellipse(width/2-100, height/2+50, 300, 300);
  fill(0, 0, 255, 255);
  ellipse(width/2+100, height/2+50, 300, 300);
}