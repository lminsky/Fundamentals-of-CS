function setup() {
  createCanvas(800, 800);

  for(var y = 0; y < 8; y = y + 1) {
    for(var x = 0; x < 8; x = x + 1) {
      if((x+y)%2 == 0) {
        fill(0, 0, 0);
      } else {
        fill(255, 0, 0);
      }
      rect(x * 100, y * 100, 100, 100);
    }
  }


}

function draw() {

}