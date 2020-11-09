
function change(element) {
  console.log("hi");
   if (element.textContent === ""){
      element.textContent = "X";
    } else if (element.textContent === "X") {
      element.textContent = "O";
    } else {
      element.textContent = "";
    }
}

/* Test below for adding event listeners */
window.onload = function() {
  document.querySelectorAll('.block').forEach(function (element) {
     element.addEventListener('click', change(element));
  });
}

/* Test above for adding event listeners */
