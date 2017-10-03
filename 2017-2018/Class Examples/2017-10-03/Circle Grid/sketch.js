function setup() {
  createCanvas(600, 600);   //Create the canvas as 600x600 pixels
  background(240);          //Set the background to light grey
  fill(0);                  //Set the shape fill to black

  var d = 50;               //Create a variable that we will use as the diameter
  var num = 5;              //Create a variable that we will use as the number of rows and columns

  for(var x = 0; x < num; x++) {      //Loop through creating each column
    for(var y = 0; y < num; y++) {    //Loop through creating each row
      if((x + y) % 2 == 0) {          //Check to see if we want the fill to be red or black
        fill(255, 0, 0);              //Set it red
      } else {
        fill(0, 0, 0);                //Set it black
      }
      ellipse(x*2*d + 100, y*2*d + 100, d, d);    //Draw a circle
    }
  }

}