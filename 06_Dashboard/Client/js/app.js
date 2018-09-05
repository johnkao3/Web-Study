function main() {
  $("#color-tab").load("./Client/html/changeColor/index.html", mainChangeColor);
  $("#calc-tab").load("./Client/html/Calc/index.html", mainCalc);
  $("#calcHyper-tab").load("./Client/html/Calc(Bootstrap)/index.html", mainCalcHyper);
  $("#pos-tab").load("./Client/html/pos/index.html", mainPos);
}

$(document).ready( main );