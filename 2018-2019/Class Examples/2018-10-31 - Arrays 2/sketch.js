var x = [];
var y = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
}

function draw() {
  background(0);
  for(var i = 0; i < x.length; i++) {
    strokeWeight(10);
    point(x[i], y[i]);
    strokeWeight(1);
    for(var j = i + 1; j < x.length; j++) {
      line(x[i], y[i], x[j], y[j]);
    }
  }
}

function mousePressed() {
  x.push(mouseX);
  y.push(mouseY);
  console.log(x, y);
}