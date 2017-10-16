function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // console.log(mouseX, mouseY);
  console.log(mouseIsPressed);
  if(mouseIsPressed) {
    background(255, 255, 0);
  } else {
    background(255, 0, 255);
  }
}