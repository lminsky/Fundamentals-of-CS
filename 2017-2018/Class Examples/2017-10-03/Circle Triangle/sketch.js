function setup() {
  createCanvas(600, 600);
  fill(0);

  var d = 50;
  var num = 5;

  for(var y = 0; y < num; y++) {
    for(var x = 0; x < y + 1; x++) {
      ellipse(x*2*d + 100, y*2*d + 100, d, d);
    }
  }

  // for(var x = 0; x < num; x++) {
  //   for(var y = 0; y < x + 1; y++) {
  //     ellipse(x*2*d + 100, y*2*d + 100, d, d);
  //   }
  // }

}