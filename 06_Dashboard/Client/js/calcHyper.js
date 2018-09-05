function setInput(e) {
  var vID = this.id.substring(3);
  var vExpr = $("#expr").val();
  var vExprLen = vExpr.length;
  var vOp = {
    "Add": "+",
    "Sub": "-",
    "Mlt": "*",
    "Div": "/",
    "Dot": ".",
    "L"  : "(",
    "R"  : ")"
  };
  switch ( vID ) {
    case "Cls" : 
      $("#expr").val("");
      $("#ans").val("");
      break;
    case "Del" :
      var z = vExpr.substring(0, vExprLen-1);
      $("#expr").val(z);
      break;
    case "Add":
    case "Sub":
    case "Mlt":
    case "Div":
    case "Dot":
    case "L"  :
    case "R"  :
      $("#expr").val(vExpr+vOp[vID]);
      break;
    case "Calc":
      setAns();
      break;
    default   :
      $("#expr").val(vExpr+vID);
      break;
     
  }
}

function setAns() {
  var vExpr = $("#expr").val();
  $("#ans").val( eval(vExpr) );
}

function mainCalcHyper() {
  $('#calcHyper-tab .btn').on('click', setInput);
  // $("#btnCalc").on('click', setAns);
}