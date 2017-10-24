function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  wave(map(mouseX, 0, width, 0, 5), map(mouseY, 0, height, 0, height/2));
}

function wave(freq, amp) {
  stroke(255);
  for(var i = 0; i <= width; i++) {
    point(i, amp*sin(radians(freq*(i+frameCount))) + height/2);
  }
}