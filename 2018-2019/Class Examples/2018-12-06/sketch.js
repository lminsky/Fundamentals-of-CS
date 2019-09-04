var cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  for(i in cars) {
    cars[i].display();
  }
}

function mousePressed() {
  new Car(createVector(mouseX, mouseY));
}

function Car(position) {
  this.pos = position;
  cars.push(this);

  this.display = function() {
    rect(position.x, position.y, 100, 50);
    rect(position.x+20, position.y-40, 60, 40);
    ellipse(position.x+20, position.y+50, 30);
    ellipse(position.x+80, position.y+50, 30);
  }
}