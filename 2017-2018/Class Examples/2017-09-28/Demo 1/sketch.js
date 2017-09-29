function setup() {
  var x = 5;
  var y = 10;

  if(x > 3) {
    console.log("X is greater than 3");
  }
  if(x < 8) {
    console.log("X is less than 8");
  }

  if(y > 18) {
    console.log("Y is greater than 8");
  } else if(y < 3) {
    console.log("Y is less than 13");
  } else if(y == 7) {
    console.log("Y is 7");
  } else {
    console.log("Something else");
  }
}