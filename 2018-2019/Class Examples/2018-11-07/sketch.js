var boxes = [0,0,0,0,0,0,0,0,0];
var turn = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  strokeWeight(5);
  rect(0, 0, 600, 600);
  line(200, 0, 200, 600);
  line(400, 0, 400, 600);
  line(0, 200, 600, 200);
  line(0, 400, 600, 400);
}

function mousePressed() {
  if(mouseX <= 600 && mouseY <= 600) {
    var row = floor(mouseY/200);
    var col = floor(mouseX/200);
    var index = col + row * 3;

    if(turn % 2 == 0) {
      boxes[index] = 1;
    } else {
      boxes[index] = 2;
    }
    turn = turn + 1;

    
  }

  console.log(boxes);
}