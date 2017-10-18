var red = 0;
var green = 0;
var blue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  stroke(red, green, blue);

  if(keyIsPressed) {
    if(keyCode == 49) {
      console.log("pressed the 1 key")
      red = 255;
      green = 0;
      blue = 0;
      stroke(red, green, blue);
    }
    if(key == "2") {
      console.log("pressed the 1 key")
      red = 0;
      green = 255;
      blue = 0;
      stroke(red, green, blue);
    }
    console.log(keyCode);
    if(keyCode == 114) {
      console.log("the r key was pressed so the background should be red")
      background(255, 0, 0);
    }
    if(key == "g") {
      console.log("the g key was pressed so the background should be green")
      background(0, 255, 0);
    }
  }

  line(pmouseX, pmouseY, mouseX, mouseY);
}

function mousePressed() {
  console.log("mouse is pressed");
}