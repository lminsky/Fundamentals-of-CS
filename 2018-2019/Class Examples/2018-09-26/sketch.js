function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 100, 200);

  var y1 = 0;
  var y2 = height;
  var x1 = -50;
  var x2 = x1 + 50;
  var dist1 = 15;
  var dist2 = 35;

  for(var i = 0; i < 100; i = i + 1) {
    line(x1, y1, x2, y2);
    x1 = x1 + dist1;
    x2 = x2 + dist2;
  }
}