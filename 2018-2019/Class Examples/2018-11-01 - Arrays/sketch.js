var x = [];
var y = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

// function draw() {
//   background(255);
//   for(var i = x.length-10; i < x.length; i=i+1) {
//     if(i >= 0) {
//       strokeWeight(5);
//       point(x[i], y[i]);
//       for(var j = i + 1; j < x.length; j=j+1) {
//         strokeWeight(1);
//         line(x[i], y[i], x[j], y[j]);
//       }
//     }
//   }
// }

function mousePressed() {
  x.push(mouseX);
  y.push(mouseY);
  console.log(x, y);

  for(var i = 0; i < x.length - 1; i=i+1) {
    line(x[i], y[i], x[x.length-1], y[y.length-1]);
  }
}