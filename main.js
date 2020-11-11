
/* Create a random generator for X or O */
let randomXorO = Math.random();
if(randomXorO < 0.5) {
  randomXorO = "X";
} else {
  randomXorO = "O";
}

/* Create a boolean to check if its first turn */
let firstTurn = true;
/* Create a variable to switch between X and O. This variable is opposite of randomXorO */
let OsTurn;
if(randomXorO === "X") { /* If randomXorO is X, then O is up for second turn, hence OsTurn is true */
  OsTurn = true;
} else {
  OsTurn = false;
}

/* If the textContent of the node is an X, return true. */
function checkX(node) {
  if(node.textContent === "X") {
    return true;
  } else {
    return false;
  }
}

/* If the textContent of the node is an O, return true. */
function checkO(node) {
  if(node.textContent === "O") {
    return true;
  } else {
    return false;
  }
}

/* A function to remove all event listeners in case of win/draw, also declares winner */
function rmTileListeners(winner) {
  let currentPlayer = document.querySelector('.current-player p');
  currentPlayer.textContent = 'Player ' + winner + ' is the winner!';

  document.querySelectorAll('.block').forEach(function (element) {
     element.removeEventListener('click', change);
  });

}

//If there is a win or draw, delete all the event listeners
function checkForWinOrDraw() {
  //Create query selectors for all 9 squares
  let tileOne = document.querySelector('.square-one p');
  let tileTwo = document.querySelector('.square-two p');
  let tileThree = document.querySelector('.square-three p');
  let tileFour = document.querySelector('.square-four p');
  let tileFive = document.querySelector('.square-five p');
  let tileSix = document.querySelector('.square-six p');
  let tileSeven = document.querySelector('.square-seven p');
  let tileEight = document.querySelector('.square-eight p');
  let tileNine = document.querySelector('.square-nine p');

  //Check if horizontal win for X or O
  if (checkO(tileOne) && checkO(tileTwo) && checkO(tileThree)) {
    //O or first row
    rmTileListeners('O');
  } else if (checkX(tileOne) && checkX(tileTwo) && checkX(tileThree)) {
    //X for first row
    rmTileListeners('X');
  } else if (checkO(tileFour) && checkO(tileFive) && checkO(tileSix)) {
    //O for second row
    rmTileListeners('O');
  } else if (checkX(tileFour) && checkX(tileFive) && checkX(tileSix)) {
    //X for second row
    rmTileListeners('X');
  } else if (checkO(tileSeven) && checkO(tileEight) && checkO(tileNine)) {
    //O for third row
    rmTileListeners('O');
  } else if (checkX(tileSeven) && checkX(tileEight) && checkX(tileNine)) {
    //X for third row
  }

  //Check for column win for X or O
  if (checkO(tileOne) && checkO(tileFour) && checkO(tileSeven)) {
    //O for first column
    rmTileListeners('O');
  } else if (checkX(tileOne) && checkX(tileFour) && checkX(tileSeven)) {
    //X for first column
    rmTileListeners('X');
  } else if (checkO(tileTwo) && checkO(tileFive) && checkO(tileEight)) {
    //O for second column
    rmTileListeners('O');
  } else if (checkX(tileTwo) && checkX(tileFive) && checkX(tileEight)) {
    //X for second column
    rmTileListeners('X');
  } else if (checkO(tileThree) && checkO(tileSix) && checkO(tileNine)) {
    //O for third column
    rmTileListeners('O');
  } else if (checkX(tileThree) && checkX(tileSix) && checkX(tileNine)) {
    //X for third column
    rmTileListeners('X');
  }

  //Check for diagonal win for X or O
  if (checkO(tileOne) && checkO(tileFive) && checkO(tileNine)) {
    //O for top-left to bottom-right
    rmTileListeners('O');
  } else if (checkX(tileOne) &&checkX(tileFive) && checkX(tileNine)) {
    //X for top-left to bottom-right
    rmTileListeners('X');
  } else if(checkO(tileThree) && checkO(tileFive) && checkO(tileSeven)) {
    //O for top-right to bottom-left
    rmTileListeners('O');
  } else if(checkX(tileThree) && checkX(tileFive) && checkX(tileSeven)) {
    //X for top-right to bottom-left
    rmTileListeners('X');
  }

  //Check for a draw
  let allTilesFilled = 0;
  document.querySelectorAll('.block p').forEach( (pEl) => {
    if(pEl.textContent !== "") {
      allTilesFilled++;
    }
  });
  if(allTilesFilled === 9) { //If it equals 9, all tiles are filled, it is a draw
    let currentPlayer = document.querySelector('.current-player p');
    currentPlayer.textContent = 'Draw!';

    document.querySelectorAll('.block').forEach(function (element) {
       element.removeEventListener('click', change);
    });
  }

}



function change(element) {

  let currentPlayer = document.querySelector('.current-player p');
  let pEl = this.querySelector('p');

   if (firstTurn) { /* If its first turn, have it be random whether O or X goes first */
     if (pEl.textContent === "") { /* It checks this.firstChild since that is the <p> */
        pEl.textContent = randomXorO;
        firstTurn = false; /* After first turn is over, switch firstTurn to false */
        if(randomXorO === "X") {
          currentPlayer.textContent = "Current player: O";
        } else {
          currentPlayer.textContent = "Current player: X";
        }
      }
    } else if (pEl.textContent === "") { /* If its not first turn, alternate between X and O */
      if(OsTurn === true) {
        pEl.textContent = "O";
        OsTurn = false;
        currentPlayer.textContent = "Current player: X";
      } else {
        pEl.textContent = "X";
        OsTurn =  true;
        currentPlayer.textContent = "Current player: O";
      }
    }
  checkForWinOrDraw();
}

/* Add event listeners and put in first player below */
window.onload = function() {
  /* Change current-player div's <p> to have current player */
  let currentPlayer = document.querySelector('.current-player p');
  currentPlayer.textContent = "Current player: " + randomXorO;

  /* Add event listener to each block in grid */
  document.querySelectorAll('.block').forEach(function (element) {
     element.addEventListener('click', change);
  });
}
