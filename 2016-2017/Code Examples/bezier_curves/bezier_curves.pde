/*
  Bezier Curve Example
  Computer Science Fundamentals
  Louis Minsky
*/

void setup() {
  size(500, 500);    //Set the size of the program window
  noFill();          //Turns off all the fill
  
  //Create 3 bezier curves. The parameters go: anchor-1-x, anchor-1-y, control-1-x, control-1-y, control-2-x, control-2-y, anchor-2-x, anchor-2-y
  bezier(10, 250, 150, 200, 350, 300, 490, 250);
  bezier(10, 250, 150, 200, 350, 490, 490, 250);
  bezier(10, 250, 150, 200, 350, 0, 490, 250);
}