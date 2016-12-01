import processing.net.*;

Server s;
Client c;
String input;

void setup() 
{
  s = new Server(this, 12345); // Start a simple server on a port
}

void draw() {
  // Receive data from client
  c = s.available();
  if (c != null) {
    input = c.readString();
    s.write(c.ip() + ": " + input);
  }
}