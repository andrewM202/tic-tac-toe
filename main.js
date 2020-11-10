
function change(element) {
   if (this.textContent === "") {
      this.textContent = "X";
    } else if (this.textContent === "X") {
      this.textContent = "O";
    } else {
      this.textContent = "";
    }
}

/* Test below for adding event listeners */
window.onload = function() {
  document.querySelectorAll('.block').forEach(function (element) {
     element.addEventListener('click', change);
  });
}

/* Test above for adding event listeners */
