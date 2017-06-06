Shape a;
Shape b;
Shape c;

void setup() {
  size(500, 500);
  background(255);
  
  a = new Shape(50, 50, 3, 40, 0);
  b = new Shape(400, 400, 4, 50, 45);
  c = new Shape(250, 250, 5, 70, 54);
  
  a.drawShape();
  b.drawShape();
  c.drawShape();
}