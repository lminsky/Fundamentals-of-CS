var x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // console.log(x);
  // ellipse(random(0, width), random(0, height), 50, 50);
  background(200, 100, 100);
  console.log(mouseX, mouseY);
  ellipse(mouseX, mouseY, 50, 50);
}