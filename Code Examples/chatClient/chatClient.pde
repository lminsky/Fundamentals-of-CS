import processing.net.*;        //Import the processing networking library

Client c;                       //a Client object c
String input;                   //a String variable input for storing messages from the server
String message = "";            //a String variable message for storing data to send to the server

void setup() {
  c = new Client(this, "127.0.0.1", 12345); //Create the client object, the string should be 
}

void draw() {
  if (c.available() > 0) {                  //Check to see if there is data from the server, if there is...
    input = c.readString();                 //Store the data from the server in the variable input
    println(input);                         //print out the value in input
  }
}

void keyPressed() {                         //If you press a key...
  if(keyCode == ENTER) {                      //If the key you pressed is the Enter button...
    c.write(message);                    //Write the value stored in message to the server
    message = "";                               //And clear the value in message
  } else {                                    //If the key you pressed was anything but enter...
    message += key;                             //Add the character of the key to the message variable
  }
}