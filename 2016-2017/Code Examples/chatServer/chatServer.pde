import processing.net.*;                //Import the processing networking library

Server s;                               //Create a Server object called S
Client c;                               //Create a Client object called c
String input;

void setup() 
{
  s = new Server(this, 12345);          //Start the server on this computer on port 12345
}

void draw() {
  c = s.available();                    //Set c to the data from the client
  if (c != null) {                      //If there is no data from a client, c will be null, otherwise...
    input = c.readString();             //Load the data from the client into the String variable input
    input = c.ip() + ": " + input;      //Add the client's ip address to their message
    println(input);     //Print out the input string to the concole
    s.write(input);     //Send the input string to every client
  }
}