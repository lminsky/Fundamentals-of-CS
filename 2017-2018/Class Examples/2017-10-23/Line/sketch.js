function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  line(50, 50, 100, 100);
  l(100, 50, 150, 300);
}

function l(x1, y1, x2, y2) {
  console.log(x1, y1, x2, y2);
  var len = sqrt(sq(x1-x2) + sq(y1-y2));
  var deltaX = x2-x1;
  var deltaY = y2-y1;
  var slope = deltaY/deltaX;
  console.log(len, slope);
  for(var i = 0; i < abs(deltaX); i+=.001) {
    point(x1+i, y1+i*slope);
  }
}