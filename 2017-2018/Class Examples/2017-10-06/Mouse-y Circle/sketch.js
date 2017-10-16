function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(0);
  noCursor(); //look up on the p5 reference

  if(mouseX > (windowWidth/2)) {
    if(mouseY > (windowHeight/2)) {
      fill(249, 255, 0);
    } else if(mouseY < windowHeight/4) {
      fill(10, 20, 30);
    } else {
      fill(13, 249, 136);
    }
  } else {
    if(mouseY > (windowHeight/2)) {
      fill(30, 20, 10);
    } else {
      fill(150, 250, 50);
    }
  }

  ellipse(mouseX, mouseY, 20, 20);
}