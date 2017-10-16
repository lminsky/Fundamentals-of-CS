function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(100);
}

function draw() {
  if(mouseX > (windowWidth/2)) {
    if(mouseY > (windowHeight/2)) {
      fill(249, 255, 0);
    } else {
      fill(13, 249, 136);
    }
  } else {
    if(mouseY > (windowHeight/2)) {
      fill(30, 20, 100);
    } else {
      fill(250, 150, 50);
    }
  }
  if(sqrt(sq(mouseX-windowWidth/2)+sq(mouseY-windowHeight/2)) < 100) {
    fill(0, 200, 200);
  }
  ellipse(mouseX, mouseY, 20, 20);
}