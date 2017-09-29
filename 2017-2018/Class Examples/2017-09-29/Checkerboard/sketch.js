function setup() {
  createCanvas(400, 400);
  background(255, 0, 0);

  for(var j = 0; j < 4; j++) {
    for(var i = 0; i < 4; i++) {
      rect(i*100, j*100, 50, 50);
      rect(i*100 + 50, j*100 + 50, 50, 50);
    }
  }
}