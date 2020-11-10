
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

function change(element) {
  let currentPlayer = document.querySelector('.current-player p');
  let pEl = this.querySelector('p');

   if(firstTurn) { /* If its first turn, have it be random whether O or X goes first */
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
