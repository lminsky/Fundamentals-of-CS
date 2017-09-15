function setup() {
  createCanvas(500, 500);
  
  background(0, 255, 255);
  stroke(255, 0, 0);
  fill(0, 0, 255);
  strokeWeight(5);
  console.log(1);
  rect(0, 0, 60, 60);

  fill(0, 255, 0);
  noFill();
  console.log(2);
  ellipse(50, 50, 50, 50);
  console.log(3);
}