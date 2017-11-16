var mX = [];
var mY = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  colorMode(RGB);
  background(255);

  mX.push(mouseX);
  mY.push(mouseY);

  if(mX.length > 100) {
    mX.shift();
    mY.shift();
  }

  colorMode(HSB);
  for(var i = 1; i < mX.length; i++) {
    stroke(map(i, 1, mX.length-1, 0, 360), 100, 100);
    line(mX[i-1], mY[i-1], mX[i], mY[i]);
  }
}

