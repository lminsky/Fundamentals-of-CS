function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180);
  line(50, 50, 100, 100);
  l(100, 50, 150, 100);
}

function l(x1, y1, x2, y2) {
  var slope = (y1-y2) / (x1 - x2);
  for(var i = 0; x1 + i <= x2; i++) {
    point(x1 + i, y1 + i * slope);
  }
}