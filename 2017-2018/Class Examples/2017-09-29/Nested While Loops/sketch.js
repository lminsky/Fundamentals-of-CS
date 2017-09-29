function setup() {
  var x = 1;
  while(x < 5) {
    var y = x;
    while(y > 0) {
      console.log("x=" + x + ", y=" + y);
      y = y - 1;
    }
    x = x + 1;
  }
}