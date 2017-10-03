function setup() {
  createCanvas(400, 400);
  background(255, 0, 0);

  var w = 50;
  var num = 8;
  for(var y = 0; y < num; y++) {
    for(var x = 0; x < num; x++) {
      if(x%2 == y%2)
        rect(x*w, y*w, w, w);
    }
  }
}