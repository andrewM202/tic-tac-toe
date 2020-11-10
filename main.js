

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
   if(firstTurn) { /* If its first turn, have it be random whether O or X goes first */
     if (this.firstChild.textContent === "") { /* It checks this.firstChild since that is the <p> */
        this.firstChild.textContent = randomXorO;
        firstTurn = false; /* After first turn is over, switch firstTurn to false */
      }
    } else if (this.firstChild.textContent === "") { /* If its not first turn, alternate between X and O */
      if(OsTurn === true) {
        this.firstChild.textContent = "O";
        OsTurn = false;
      } else {
        this.firstChild.textContent = "X";
        OsTurn =  true;
      }
    }
}

/* Test below for adding event listeners */
window.onload = function() {
  document.querySelectorAll('.block').forEach(function (element) {
     element.addEventListener('click', change);
  });
}

/* Test above for adding event listeners */
