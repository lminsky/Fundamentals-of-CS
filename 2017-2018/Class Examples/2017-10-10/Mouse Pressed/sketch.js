function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(255);
  rect(50, 50, 100, 100);

  if(mouseIsPressed == true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  if(mouseIsPressed && mouseX > 50 && mouseX < 150 && mouseY > 50 && mouseY < 150) {
    background(255);
  }
}