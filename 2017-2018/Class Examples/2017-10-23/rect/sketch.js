function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  noFill();
  rect(50, 50, 100, 100);
  r(200, 50, 200, 300);
}

function r(x, y, w, h) {
  line(x, y, x+w, y);
  line(x+w, y, x+w, y+h);
  line(x+w, y+h, x, y+h);
  line(x, y, x, y+h);
}