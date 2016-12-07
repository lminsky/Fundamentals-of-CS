import processing.net.*;          //Import the processing networking library

Server s;                         //Create a server object s
Client c;                         //Create a client object c
String input;                     //The string variable for storing input from the client
int data;                         //The int variable for storing the interpreted data from the client

int squares[] = new int[9];       //Create an array to store what should be in each square of the grid 
int turn = 1;                     //This int tracks whose turn it is, 1 is the server, 2 is the client

int letterWidth = 36;             //This is for proper character placement
int letterHeight = 44;            //This is for proper character placement

void setup() {                    
  size(600, 600);                 //Create a canvas that is 600x600
  s = new Server(this, 12345);    //Create a server on this computer on port 12345
}

void draw() {
  drawGrid();                     //Draw the grid, X's and O's
  checkWin();                     //Check to see if anyone has won

  if(turn == 2) {                 //If it is the client's turn
    c = s.available();            //Get the message from the client
    if (c != null) {              //If the client has actually sent a message...
      input = c.readString();       //Store the message from the client
      data = int(input);            //Change the message from a string to an int
      if(squares[data] == 0) {      //Make sure that the square is empty
        squares[data] = turn;            //Assign the square that the client chose to them
      }
      turn = 1;                     //Make it player 1's turn (the server)
    }
  }
}

void mousePressed() {                      //If the mouse is pressed...
  if(turn == 1) {                            //If it is player 1's turn (the server)...
    int index = getIndex(mouseX, mouseY);      //find out which box they clicked in
    if(squares[index] == 0) {                  //If the box they clicked in is empty...
      squares[index] = turn;                        //Assign that box to player 1
      turn = 2;                                  //Make it player 2's turn (the client)
      s.write(index + "");                       //Send the server's choice to the client
    }
  }
}

//The method looks at the squares array to see if anyone has won. If they have, it sets turn to 0
void checkWin() {
  stroke(255, 0, 0);
  //Rows
  for(int i = 0; i < 3; i++)
    if(squares[0+i*3] == squares[1+i*3] && squares[1+i*3] == squares[2+i*3] && squares[0+i*3] != 0) {
      line(0, ((1 + i * 2) / 6.0) * height, width, ((1 + i * 2) / 6.0) * height);
      turn = 0;
    }

  //Columns
  for(int i = 0; i < 3; i++)
    if(squares[0+i] == squares[3+i] && squares[3+i] == squares[6+i] && squares[0+i] != 0) {
      println(((1 + i * 2) / 6) * width);
      line(((1 + i * 2) / 6.0) * width, 0, ((1 + i * 2) / 6.0) * width, height);
      turn = 0;
    }
  
  //Left to right
  if(squares[0] == squares[4] && squares[4] == squares[8] && squares[0] != 0) {
     turn = 0;
    line(0, 0, width, height);
  }
  //Right to left
  if(squares[2] == squares[4] && squares[4] == squares[6] && squares[2] != 0) {
    turn = 0;
    line(0, height, width, 0);
  }
}

//This method returns the box number based on the given x and y coordinates
int getIndex(int x, int y) {
  int xVal;
  int yVal;
  
  if(x < width / 3)
    xVal = 0;
  else if(x < 2 * width / 3)
    xVal = 1;
  else
    xVal = 2;
    
  if(y < height / 3)
    yVal = 0;
  else if(y < 2 * height / 3)
    yVal = 1;
  else
    yVal = 2;
    
  return 3*yVal + xVal;
}

//This method draws the grid itself and fills in the appropriate X's and O's
void drawGrid() {
  background(255);
  stroke(0);
  fill(0);
  strokeWeight(5);
  line(width/3, 0, width/3, height);
  line(2 * width/3, 0, 2 * width/3, height);
  line(0, height/3, width, height/3);
  line(0, 2 * height/3, width, 2 * height/3); 
  
  textSize(64);
  for(int i = 0; i < squares.length; i++) {
    if(squares[i] == 1) {
      text("X", (((i%3) * 2 + 1) * width/6) - letterWidth/2, (((i/3) * 2 + 1) * height/6) + letterHeight/2);
    } else if(squares[i] == 2) {
      text("O", (((i%3) * 2 + 1) * width/6) - letterWidth/2, (((i/3) * 2 + 1) * height/6) + letterHeight/2);
    }
  }
}
