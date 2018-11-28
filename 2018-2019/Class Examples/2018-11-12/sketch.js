var boxes = [0,0,0,0,0,0,0,0,0];
var turn = 0;
var winner = false;

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

  for(var i = 0; i < 9; i=i+1) {
    drawShape(i, boxes[i]);
  }
}

function mousePressed() {
  if(mouseX <= 600 && mouseY <= 600 && winner == false) {
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

  winner = checkWinner();
  // console.log(boxes);
}

function checkWinner() {
  if(boxes[0] == boxes[1] && boxes[1] == boxes[2] && boxes[0] != 0) {
    return boxes[0];
  }



  return false;
}

function drawShape(index, val) {
  var row = floor(index / 3);
  var col = index % 3;
  textSize(62);
  textAlign(CENTER, CENTER);
  if(val == 1) {
    text("❌", col*200+100, row*200+100);
    // rect(col * 200 + 100, row * 200 + 100, 20, 20);
  } else if(val == 2) {
    text("⭕", col*200+100, row*200+100);
    // ellipse(col * 200 + 100, row * 200 + 100, 25);
  }
}