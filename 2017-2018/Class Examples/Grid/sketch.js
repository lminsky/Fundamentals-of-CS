function setup() {
  createCanvas(601, 601);

  text("0", 5, 15);

  for(var y = 0; y < height; y+=100) {
    fill(255);
    line(0, y, width, y);
    fill(0);
    text(y, 5, y-5);
  }

  for(var x = 0; x < width; x+= 100) {
    fill(255);
    line(x, 0, x, height);
    fill(0);
    text(x, x-25, 15);
  }
}