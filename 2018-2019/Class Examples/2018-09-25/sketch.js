var x = 5;
var w = 10;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(200);

  // x = x * 3; // Multiplication
  // x = x / 5; // Division
  // x = x % 10; //Modulo
  // x = x ** 2;    //Exponential

}

function draw() {
  // put drawing code here
  rect(x, 5, w, 10);
  // x = x + 1;
  // x = x % (windowWidth - w);
  console.log(x);
}