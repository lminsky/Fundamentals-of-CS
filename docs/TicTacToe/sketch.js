var topLine;
var leftLine;
var squareSize;
var grid = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
var turn = 0;
var gameOver = -1;
var scores = [0, 0]; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawGrid();
  drawShapes();
  drawScores();
  checkDraw();
  setCursor();
}

function setCursor() {
  if(turn < 9 && gameOver == -1) {
    noCursor();
    if(turn%2 == 0) {
      stroke(69, 235, 199);
      strokeWeight(5);
      line(mouseX-squareSize/4, mouseY-squareSize/4, mouseX+squareSize/4, mouseY+squareSize/4);
      line(mouseX-squareSize/4, mouseY+squareSize/4, mouseX+squareSize/4, mouseY-squareSize/4);
    } else {
      strokeWeight(5);
      stroke(204, 52, 204);
      noFill();
      ellipse(mouseX, mouseY, squareSize*3/5);
    }
  } else {
    cursor(ARROW);
  }
}

function drawScores() {
  noStroke();
  textSize(64);
  fill(69, 235, 199);
  textAlign(LEFT);
  text(scores[0], 15, 60);
  fill(204, 52, 204);
  textAlign(RIGHT);
  text(scores[1], width-15, 60);
}

function checkDraw() {
  if(turn == 9 && gameOver == -1) {
    noStroke();
    fill(255, 0, 0);
    textSize(200);
    textAlign(CENTER);
    text("DRAW", width/2, height*3/5);
  }
}

function checkWin() {
  var wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(var i = 0; i < wins.length; i++) {
    if(grid[wins[i][0]] != -1 && grid[wins[i][0]] == grid[wins[i][1]] && grid[wins[i][1]] == grid[wins[i][2]]) {
      gameOver = i;
      scores[grid[wins[i][0]]]++;
    }
  }
}

function drawShapes() {
  for(var i = 0; i < grid.length; i++) {
    if(grid[i] != -1) {
      var pos = getCR(i);
      if(grid[i] == 0) {
        drawX(pos[0], pos[1]);
      } else if(grid[i] == 1) {
        drawO(pos[0], pos[1]);
      }
    }
  }
}

function drawX(column, row) {
  strokeWeight(5);
  stroke(69, 235, 199);
  line(leftLine+(squareSize/4) + column*squareSize, topLine+(squareSize/4) + row*squareSize, leftLine+(squareSize*3/4) + column*squareSize, topLine+(squareSize*3/4) + row*squareSize);
  line(leftLine+(squareSize/4) + column*squareSize, topLine+(squareSize*3/4) + row*squareSize, leftLine+(squareSize*3/4) + column*squareSize, topLine+(squareSize/4) + row*squareSize);
}

function drawO(column, row) {
  strokeWeight(5);
  stroke(204, 52, 204);
  noFill();
  ellipse(leftLine+(squareSize/2) + column*squareSize, topLine+(squareSize/2) + row*squareSize, squareSize*3/5);
}

function getCR(index) {
  var column = index%3;
  var row = floor(index/3);
  return [column, row];
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  var index = getIndex();
  if(index != -1 && gameOver == -1) {
    if(grid[index] == -1) {
      grid[index] = turn % 2;
      turn++;
      checkWin();
    }
  } else {
    if(mouseX > leftLine + squareSize && mouseX < leftLine + 2 * squareSize) {
      if(mouseY > topLine + 3.3 * squareSize && mouseY < topLine + 3.6 * squareSize) {
        newGame();
      }
    }
  }

  console.log(turn);
}

function newGame() {
  grid = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
  turn = 0;
  gameOver = -1;
}

function getIndex() {
  var r = -1;
  var c = -1;

  for(var i = 0; i < 3; i++) {
    if(mouseX > leftLine + squareSize * i && mouseX < leftLine + squareSize * (i + 1)) {
      c = i;
    }
  }
  for(var i = 0; i < 3; i++) {
    if(mouseY > topLine + squareSize * i && mouseY < topLine + squareSize * (i + 1)) {
      r = i;
    }
  }
  if(r == -1 || c == -1) {
    return -1;
  } else {
    return  3 * r + c;
  }
}

function drawGrid() {
  background(255, 219, 91);
  squareSize = height/5;
  topLine = height/2 - 3*squareSize/2;
  leftLine = width/2 - 3*squareSize/2;
  strokeWeight(5);
  stroke(178, 150, 46);

  line(leftLine + 0 * squareSize, topLine + 1 * squareSize, leftLine + 3 * squareSize, topLine + 1 * squareSize);
  line(leftLine + 0 * squareSize, topLine + 2 * squareSize, leftLine + 3 * squareSize, topLine + 2 * squareSize);
  line(leftLine + 1 * squareSize, topLine + 0 * squareSize, leftLine + 1 * squareSize, topLine + 3 * squareSize);
  line(leftLine + 2 * squareSize, topLine + 0 * squareSize, leftLine + 2 * squareSize, topLine + 3 * squareSize);

  strokeWeight(5);
  stroke(178, 150, 46);
  noFill();
  rect(leftLine + squareSize, topLine + 3.3 * squareSize, squareSize, squareSize/3);
  noStroke();
  fill(178, 150, 46);
  textSize(height/25.5);
  textAlign(CENTER);
  text("RESTART", width/2, topLine + 3.55 * squareSize);
}