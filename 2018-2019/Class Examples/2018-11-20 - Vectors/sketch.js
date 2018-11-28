var p0;
var v0;
var a0;

var p1;
var v1;
var a1;

var p2;
var v2;
var a2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  p0 = createVector(30, 40);
  v0 = createVector(3, 2);
  a0 = createVector(0, .1);

  p1 = createVector(90, 80);
  v1 = createVector(5, 1);
  a1 = createVector(0, .1);

  p2 = createVector(100, 60);
  v2 = createVector(-3, -2);
  a2 = createVector(0, .1);
}

function draw() {
  background(200);
  ellipse(p0.x, p0.y, 20, 20);
  ellipse(p1.x, p1.y, 20, 20);
  ellipse(p2.x, p2.y, 20, 20);

  p0.add(v0);
  v0.add(a0);

  p1.add(v1);
  v1.add(a1);

  p2.add(v2);
  v2.add(a2);

  if(p0.y > height) {
    v0.y = v0.y * -.85;
    v0.x = v0.x * .95;
    p0.y = height;
  }

  if(p0.x > width || p0.x < 0) {
    v0.x = v0.x * -1;
  }

  if(p1.y > height) {
    v1.y = v1.y * -.85;
    v1.x = v1.x * .95;
    p1.y = height;
  }

  if(p1.x > width || p1.x < 0) {
    v1.x = v1.x * -1;
  }

  if(p2.y > height) {
    v2.y = v2.y * -.85;
    v2.x = v2.x * .95;
    p2.y = height;
  }

  if(p2.x > width || p2.x < 0) {
    v2.x = v2.x * -1;
  }
}