var p;
var v;
var a;

function setup() {
  createCanvas(windowWidth, windowHeight);
  p = createVector(30, 40);
  v = createVector(3, 2);
  a = createVector(0, .1);
}

function draw() {
  background(200);
  ellipse(p.x, p.y, 20, 20);
  p.add(v);
  v.add(a);

  console.log(v);

  if(p.y > height) {
    v.y = v.y * -.85;
    v.x = v.x * .95;
    p.y = height;
  }

  if(p.x > width || p.x < 0) {
    v.x = v.x * -1;
  }
}