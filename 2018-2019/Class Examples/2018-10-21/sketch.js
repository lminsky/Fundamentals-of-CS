function setup() {
  createCanvas(windowWidth, windowHeight);
  var x = floor(4.75);
  console.log(x);

  console.log(fun(3, 5));

  noStroke();
  fill(0);
  star(10, 50);
  star(100, 50);
  star(200, 50);
  star(300, 50);
}

function draw() {
  // put drawing code here
}

function fun(x, y) {
  return 5 * x - y;
}

function star(x, y, w, h) {
  console.log(x, y);
  triangle(x, 50+y, 25+x, y, 50+x, 50+y);
  triangle(x, 15+y, 50+x, 15+y, 25+x, 65+y);
}