function changeGreen() {
  $("#header").attr('class', 'text-green');
  index = 0;
}

function changeBlue() {
  $("#header").attr('class', 'text-blue');
  index = 1;
}

// If index = 0 is blue
// Else is Green
function changeColor() {
  if( index == 0) {
    changeBlue()
  }
  else {
    changeGreen()
  }
}

function changeColormain() {
  $("#header").on("click", changeColor);
  $("#btnBlue").on("click", changeBlue);
  $("#btnGreen").on("click", changeGreen);
  changeGreen();
}

var index = 0;
