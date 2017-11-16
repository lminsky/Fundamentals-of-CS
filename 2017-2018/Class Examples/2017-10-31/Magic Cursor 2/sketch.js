var mX = [];
var mY = [];
var ms = [];
var seconds = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
}

function draw() {
  colorMode(RGB);
  background(255);

  mX.push(mouseX);
  mY.push(mouseY);
  ms.push(millis());

  for(var i = mX.length-1; i >= 0; i--) {
    if(millis() - ms[i] > seconds*1000) {
      mX.splice(i, 1);
      mY.splice(i, 1);
      ms.splice(i, 1);
    }
  }

  colorMode(HSB);
  for(var i = 1; i < mX.length; i++) {
    stroke(map(i, 0, mX.length, 0, 360), 100, 100);
    line(mX[i-1], mY[i-1], mX[i], mY[i]);
  }
}

