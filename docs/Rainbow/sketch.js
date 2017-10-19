function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  for(i = 0; i < width; i++) {
    stroke(map(i, 0, width, 0, 255), 255, 255);
    line(i, 0, i, height);
  }
}