/*
Shapes and Colors Example
Computer Science Fundamentals
Louis Minsky
*/

void setup() {
  size(500, 500);            //Set the canvas to 500px by 500px

  background(255, 0, 255);   //Sets the background color to magenta
  
  //noFill();                //Removes the fill
  //noStroke();              //Removes the stroke
  
  fill(255, 0, 0);           //Sets the fill to red
  stroke(0, 255, 0);         //Sets the stroke to green
  
  point(250, 250);           //Draw a point
  
  line(120, 40, 180, 155);   //Draw a line
  
  triangle(100, 350, 150, 450, 50, 450);  //Draw a triangle
  
  rect(5, 5, 50, 50);        //Draw a rectangle
  
  quad(400, 400, 430, 400, 450, 460, 400, 450); //Draw a quadrangle
  
  ellipse(300, 100, 30, 70); //Draw a ellipse
  
  arc(200, 200, 100, 250, 1, HALF_PI); //Draw an arc
}