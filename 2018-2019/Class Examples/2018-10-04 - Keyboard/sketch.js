function setup() {
  // put setup code here
}

function draw() {
  background(255);
  // if(keyIsPressed == true) {
  //   console.log(key);
  //   console.log(keyCode);
  // }
  console.log(keyIsDown(65));
  if(keyIsDown(65)) {
    rect(10, 10, 40, 40);
  }
}

// function keyPressed() {
//   console.log(key);
// }

// function keyReleased() {
//   console.log(keyCode);
// }