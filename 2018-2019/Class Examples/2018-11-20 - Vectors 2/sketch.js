var p = [];
var v = [];
var a = [];
var d = [];
var c = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < 500; i = i +1) {
    p.push(createVector(random(20, width-20), random(50, 300)));
    v.push(createVector(random(-5, 5), random(-5, 5)));
    a.push(createVector(0, .1));
    d.push(random(20, 50));
    c.push(i%3);
  }
}

function draw() {
  background(0, 200, 0);

  for(var i = 0; i < p.length; i = i+1) {
    if(c[i] == 0) {
      fill(255);
    } else if(c[i] == 1) {
      fill(255, 0, 0);
    } else {
      fill(220, 220, 0);
    }
    ellipse(p[i].x, p[i].y, d[i], d[i]);

    p[i].add(v[i]);
    v[i].add(a[i]);


    if(p[i].y > height) {
      v[i].y = v[i].y * -.85;
      v[i].x = v[i].x * .95;
      p[i].y = height;
    }

    if(p[i].x > width || p[i].x < 0) {
      v[i].x = v[i].x * -1;
    }
  }
}