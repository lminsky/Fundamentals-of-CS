/*
  Variable Example
  Computer Science Fundamentals
  Louis Minsky
*/

void setup() {
  // -------Declaring variables-------
  
  //First state what kind of data you're storing, then name the variable, then assign it a value
  int x = 5;                       //int is an integer, meaning it is a number without a decimal point
  String y = "Hello";              //String is for text and always uses the double quotation marks
  color red = #FF0000;             //color is a color and takes a hex value for r,g,b
  color green = color(0, 255, 0);  //you can also create a color variable by declaring it this way
  
  
  // -------Manipulate variables-------
  
  //You can do math to them:
  println(x + 5); //This outputs 10 because x = 5, but it does not change the value stored in x
  
  //you can assign them new values:
  x = 10;         //x is now 10
  
  //you can also reassign them by referring to themselves
  x = x + 10;     //x is now 20
  //this can also be written as:
  x += 10;        //x is now 30
  
  //it works with other operators as well (+, -, *, /, %)
  x -= 10;        //x is now 20
  x /= 2;         //x is now 10
  
  //if you just want to add one to a variable you can say:
  x++;            //x is now 11
  //or subtract 1
  x--;            //x is 10 again
  
  
  //There are some special keywords that are preassigned and can't be changed. They are written in all caps:
  println("PI = " + PI);
  println("HALF_PI = " + HALF_PI);
  println("QUARTER_PI = " + QUARTER_PI);
  println("TWO_PI = " + TWO_PI);
  println("TAU = " + TAU);
  
  
  //Finally, there are built in variables that always track the size of the window
  println("width = " + width);      //This is set by size() and will tell you how wide your program window is
  println("height = " + height);    //This is set by size() and will tell you how tall your program window is
}