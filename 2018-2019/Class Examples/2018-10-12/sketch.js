function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  if(mouseIsPressed) {
    // point(mouseX, mouseY);
    // ellipse(mouseX, mouseY, 10);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}