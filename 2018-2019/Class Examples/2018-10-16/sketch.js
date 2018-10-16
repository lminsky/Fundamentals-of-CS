var col = "black";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  stroke(0);
  rect(0, 0, width, 100); //Tool area
  rect(50, 40, 20, 20);   //First button

  // if(col == "black") {
  //   stroke(0);
  // } else if(col == "red") {
  //   stroke(255, 0, 0);
  // }

  if(mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);

    if(mouseX > 50 && mouseX < 70 && mouseY > 40 && mouseY < 60) {
      // col = "red";
      stroke(255, 0, 0);
    }
  }
}