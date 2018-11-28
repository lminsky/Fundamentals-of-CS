var b1;
var b2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  b1 = new Ball(10, 250, 100, 50, 1, 2);
  b2 = new Ball(15, 120, 200, 300, 1, 2);
}

function draw() {
  colorMode(RGB);
  background(255);
  b1.display();
  b2.display();
}

function Ball(Bigness, Hue, X, Y, vX, vY) {
  //Properties
  this.bigness = Bigness;
  this.hue = Hue;
  this.position = createVector(X, Y);
  this.velocity = createVector(vX, vY);

  //Functions
  this.display = function() {
    colorMode(HSB);
    fill(this.hue, 100, 100);
    ellipse(this.position.x, this.position.y, this.bigness);
    this.move();
  };
  this.move = function() {
    this.position.add(this.velocity);
  };
}