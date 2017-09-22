function setup() {
  var x = 10;
  var y = 20;
  console.log(x);     //Will output: 10
  console.log(y);     //Will output: 20
  x = x + y;
  console.log(x);     //Will output: 30
  console.log(y);     //Will output: 20
  y = x * y;
  console.log(x);     //Will output: 30
  console.log(y);     //Will output: 600
  x = y / (x - 20);
  console.log(x);     //Will output: 60
  console.log(y);     //Will output: 600
  y = y % x
  console.log(x);     //Will output: 60
  console.log(y);     //Will output: 0
  x = x ** y;
  console.log(x);     //Will output: 1
  console.log(y);     //Will output: 0
  y = y - x;
  console.log(x);     //Will output: 1
  console.log(y);     //Will output: -1
}