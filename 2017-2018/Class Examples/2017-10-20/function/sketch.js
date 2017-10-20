function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 255, 255);
  for(var i=-500; i <= 1000; i++) {
    console.log(i, greateFunction(i));
  }

  l(50, 50, 100, 100);

}

function draw() {
  //face(random(width), random(height), random(255), random(255), random(255));
}

function face(x, y, r, g, b) {
  fill(r, g, b);
  ellipse(x, y, 100, 100);
  ellipse(x - 25, y - 25, 20, 20);
  ellipse(x + 25, y - 25, 20, 20);
}

function greateFunction(x){
  return 3*x+2;
}