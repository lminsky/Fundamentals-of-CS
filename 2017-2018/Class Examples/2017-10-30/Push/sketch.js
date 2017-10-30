var mX = [];
var mY = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);

  for(var i = 1; i < mX.length; i++) {
    line(mX[i-1], mY[i-1], mX[i], mY[i]);
  }
}

function mousePressed() {
  mX.push(mouseX);
  mY.push(mouseY);

  console.log(mX, mY);
}

function keyPressed() {
  mX.pop();
  mY.pop();
  console.log(mX, mY);
}