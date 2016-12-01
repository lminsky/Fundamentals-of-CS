import processing.net.*;       //Import the processing networking library

Server s;                      //the Server object s
Client c;                      //the Client object c
int hue = 0;                   //the hue variable starts at 0

void setup() 
{
  size(500, 500);              //Set the size of the program
  colorMode(HSB, 255);         //Set the color mode to be hue, saturation, brightness
  s = new Server(this, 12345); //Start the server on the port 12345
}

void draw() {
  background(hue, 255, 255);   //Set the background color to the value stored in hue
  c = s.available();           //Store the data from the client in c
  if (c != null) {             //If there isn't any data from a client c will be null
    String input = c.readString();  //Read the data in from c (if we don't do this it will just build up)
    println(input);            //Print the data so we can see what people are sending
    hue++;                     //Increase the value of hue
  }
  if(hue > 255)                //If hue reaches 255
    hue = 0;                   //Set hue back to 0 (now hue loops)
}