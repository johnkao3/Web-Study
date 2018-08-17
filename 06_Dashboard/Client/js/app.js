function main() {
  $("#color-tab").load("./Client/html/changeColor/index.html", changeColormain)
  $("#calc-tab").load("./Client/html/Calc/index.html", Calcmain)
  $("#calcHyper-tab").load("./Client/html/Calc(Bootstrap)/index.html", CalcHypermain);
}

$(document).ready( main );