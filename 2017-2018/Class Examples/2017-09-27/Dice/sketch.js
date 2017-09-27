function setup() {
  createCanvas(500, 500);
  background(200);

  fill(255);
  stroke(0);
  strokeWeight(3);
  rect(width/5, height/5, 3*width/5, 3*width/5, 50);

  fill(0);
  var pipDiameter = width/10;
  var distance = width/6;
  var number = floor(random(6)) + 1;
  console.log(number);

  //Center
  if(number%2 == 1) {
    ellipse(width/2, height/2, pipDiameter, pipDiameter);
  }

  //Top Left
  //Bottom Right
  if(number != 1) {
    ellipse(width/2 - distance, height/2 - distance, pipDiameter, pipDiameter);
    ellipse(width/2 + distance, height/2 + distance, pipDiameter, pipDiameter);
  }

  //Top Right
  //Bottom Left
  if(number > 3) {
    ellipse(width/2 + distance, height/2 - distance, pipDiameter, pipDiameter);
    ellipse(width/2 - distance, height/2 + distance, pipDiameter, pipDiameter);
  }

  //Top Center
  //Bottom Center
  if(number == 6) {
    ellipse(width/2, height/2 - distance, pipDiameter, pipDiameter);
    ellipse(width/2, height/2 + distance, pipDiameter, pipDiameter);
  }

  if(number == 1 || number == 3 || number == 5) {
    //Display center dot
  } else {
    //Display top left and bottom right
  }

  if(number == 1) {
    //Display 1 pip
  } else if(number == 2) {
    //Display 2 pips
  } else if(number == 3) {
    //Display 3 pips
  }

}





