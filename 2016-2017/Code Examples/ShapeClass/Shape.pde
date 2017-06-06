class Shape {
  int x;
  int y;
  int sides;
  int radius;
  int rotation;
  PShape s;
 
 Shape(int xPos, int yPos, int s, int r, int degrees) {
   x = xPos;
   y = yPos;
   sides = s;
   radius = r;
   rotation = degrees;
 }
 
 void print() {
   println("X = " + x + ", Y = " + y + ", Number of Sides = " + sides +
   ", Radius = " + radius);
 }
 
 void setSides(int x) {
   sides = x;
 }
 
 int numSides() {
   return sides;
 }
 
 void drawShape() {
   stroke(0);
   strokeWeight(3);
   s = createShape();
   s.beginShape();
   for(int i = 0; i < sides; i++) {
     float rads = radians(rotation + (360.0/sides)*i);
     float x2 = cos(rads) * radius;
     float y2 = sin(rads) * radius;
     s.vertex(x2, y2);
   }
   s.endShape(CLOSE);
   shape(s, x, y); 
   
   strokeWeight(3);
   stroke(255, 0, 0, 100);
   point(x, y);
   noFill();
   ellipse(x, y, radius*2, radius*2);
 }
  
}