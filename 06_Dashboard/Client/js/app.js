function main() {
  $("#color-tab").load("./Client/html/changeColor/index.html", changeColormain)
  $("#calc-tab").load("./Client/html/Calc/index.html", Calcmain)
  $("#calcHyper-tab").load("./Client/html/Calc(Bootstrap)/index.html", CalcHypermain);
  $("#pos-tab").load("./Client/html/pos/index.html", main_POS)
}

$(document).ready( main );