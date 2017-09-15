function setup() {
  createCanvas(500, 500);     //Create a 500x500 canvas
  
  background(0, 255, 255);    //Set the background to cyan

  stroke(255, 0, 0);          //Set the stroke to red
  fill(0, 0, 255);            //Set the fill to blue
  strokeWeight(5);            //Set the stroke weight to 5
  rect(0, 0, 60, 60);         //Draw a rectangle

  fill(0, 255, 0);            //Set the fill to green
  noFill();                   //Set to no fill
  ellipse(50, 50, 50, 50);    //Draw an ellipse
}