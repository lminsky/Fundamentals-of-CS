function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);

  //We have ten variables
  var a = 7;
  var b = 12;
  var c = 2;
  var d = 20;
  var e = 100;
  var f = 52;
  var g = 51;
  var h = 13;
  var i = 2;
  var j = 7;

  //Find the maximum value stored in the ten variables
  var max = a;
  if(b > max) {
    max = b;
  }
  if(c > max) {
    max = c;
  }
  if(d > max) {
    max = d;
  }
  if(e > max) {
    max = e;
  }
  if(f > max) {
    max = f;
  }
  if(g > max) {
    max = g;
  }
  if(h > max) {
    max = h;
  }
  if(i > max) {
    max = i;
  }
  if(j > max) {
    max = j;
  }
  console.log(max);


  //Create an array the holds ten values
  var arr = [7, 12, 2, 20, 100, 52, 51, 13, 2, 7];
  console.log(arr);
  arr[5] = -20;
  console.log(arr);

  //Find the maximum value stored in the array
  var max = arr[0];
  for(var i = 0; i < 10; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);

}