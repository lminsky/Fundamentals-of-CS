function setup() {
  // for(var i = 2; i < 1000; i=i+1) {
    console.log("count = ", hailstone(10, 0));
  // }
}

function hailstone(n, count) {
  if(n != 1) {
    if(n % 2 == 0) {
      n = n/2;
    } else {
      n = 3 * n + 1;
    }
    console.log("n = ", n);
    return hailstone(n, count+1);
  }
  return count;

}