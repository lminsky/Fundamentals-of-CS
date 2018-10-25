function setup() {
  createCanvas(windowWidth, windowHeight);

  star(10, 50, 50, 100);
  star(100, 100, 100, 50);
  star(200, 50, 200, 20);
  star(300, 300, 10, 250);
}

function star(x, y, w, h) {
  noStroke();
  fill(0, 255, 0);
  rect(x, y, w, h);
  fill(0);
  w = w / 50;
  h = h / 65;
  triangle(w*00+x, h*50+y, w*25+x, h*00+y, w*50+x, h*50+y);
  triangle(w*00+x, h*15+y, w*50+x, h*15+y, w*25+x, h*65+y);
}