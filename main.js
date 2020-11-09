function change(element) {
   if (element.textContent === ""){
      element.textContent = "X";
    } else if (element.textContent === "X") {
      element.textContent = "O";
    } else {
      element.textContent = "";
    }
}

document.querySelectorAll('.block').forEach(function (element) {
   element.addEventListener('click', change(element));
});

let squareOne = document.querySelector('square-one p');
