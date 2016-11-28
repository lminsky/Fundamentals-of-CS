import processing.net.*;

Server s;
Client c;
String input;
int data[];

void setup() 
{
  s = new Server(this, 12345); // Start a simple server on a port
}

void draw() {
  // Receive data from client
  c = s.available();
  if (c != null) {
    input = c.readString();
    input = input.substring(0, input.indexOf("\n")); // Only up to the newline
    s.write(c.ip() + ": " + input + "\n");
  }
}