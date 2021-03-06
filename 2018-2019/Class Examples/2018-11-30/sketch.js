var balls = [];
var count = 0;
var maxBounce = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(20);
}

function draw() {
  colorMode(RGB);
  background(255);
  for(var i = 0; i < balls.length; i = i + 1) {
    balls[i].display();
  }
  if(balls.length > 1) {
    for(var i = 0; i < balls.length; i = i + 1) {
      for(var j = i + 1; j < balls.length; j = j + 1) {
        var dist = distance(balls[i], balls[j]);
        var radii = balls[i].bigness/2 + balls[j].bigness/2;
        if(dist < radii) {
          balls[i].reverse();
          balls[j].reverse();
          console.log("Overlap");
        }
      }
    }
  }
}

function mousePressed() {
  var burstSize = 1;
  for(var i = 0; i < burstSize; i=i+1) {
    var bigness = 25;
    // var hue = random(0, 360);
    var hue = (floor(count++/burstSize) * 30) % 360;
    var x = mouseX;
    var y = mouseY;
    var vX = random(-5, 5);
    var vY = random(-5, 5);
    // var vX = 5*cos(radians(i));
    // var vX = 5*cos(radians(i * 360 / burstSize));
    // var vY = 5*sin(radians(i * 360 / burstSize));
    balls.push(new Ball(bigness, hue, x, y, vX, vY));
  }
}

function Ball(Bigness, Hue, X, Y, vX, vY) {
  //Properties
  this.bigness = Bigness;
  this.hue = Hue;
  this.position = createVector(X, Y);
  this.velocity = createVector(vX, vY);
  this.bounceCount = 0;

  //Functions
  this.display = function() {
    colorMode(HSB);
    noStroke();
    fill(this.hue, 100, 100);
    // console.log(this.velocity);
    ellipse(this.position.x, this.position.y, this.bigness);

    // var index = balls.indexOf(this);
    // if(index < balls.length -1) {
    //   stroke(100, 100, 0);
    //   line(this.position.x, this.position.y, balls[index+1].position.x, balls[index+1].position.y);
    // }

    this.move();
  };
  this.move = function() {
    this.position.add(this.velocity);

    if(this.position.x > width - this.bigness/2) {
      this.velocity.x = this.velocity.x * -1;
      this.position.x = width - this.bigness/2;
      this.bounceCount++;
    }

    if(this.position.x < this.bigness/2) {
      this.velocity.x = this.velocity.x * -1;
      this.position.x = this.bigness/2;
      this.bounceCount++;
    }

    if(this.position.y > height - this.bigness/2) {
      this.velocity.y = this.velocity.y * -1;
      this.position.y = height - this.bigness/2;
      this.bounceCount++;
    }

    if(this.position.y < this.bigness/2) {
      this.velocity.y = this.velocity.y * -1;
      this.position.y = this.bigness/2;
      this.bounceCount++;
    }

    if(this.bounceCount > maxBounce) {
      var index = balls.indexOf(this);
      balls.splice(index, 1);
    } 
  };

  this.reverse = function() {
    this.velocity.mult(-1);
  }
}

function distance(b1, b2) {
  var dx = b1.position.x - b2.position.x;
  var dy = b1.position.y - b2.position.y;
  var dist = sqrt(sq(dx) + sq(dy));
  return dist;
}





















