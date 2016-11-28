import processing.net.*;

Client c;
String input;
int data[];
String message = "";

void setup() 
{
  // Connect to the server's IP address and port
  c = new Client(this, "127.0.0.1", 12345); // Replace with your server's IP and port
}

void draw() 
{
  // Receive data from server
  if (c.available() > 0) {
    input = c.readString();
    input = input.substring(0, input.indexOf("\n")); // Only up to the newline
    println(input);
  }
}

void keyPressed() {
  if(keyCode == ENTER) {
    c.write(message + "\n");
    message = "";
  } else {
    message += key;
  }
}