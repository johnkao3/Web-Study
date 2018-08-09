function setInput(e) {
  var vID = this.id.substring(3);
  var vExpr = $("#expr").val();
  var vExprLen = vExpr.length;
  var vOp = {
    "Add": "+",
    "Sub": "-",
    "Mlt": "*",
    "Dib": "/",
    "Dot": ".",
    "L"  : "(",
    "R"  : ")"
  };
  switch ( vID ) {
    case "Cls" : 
      $("#expr").val("");
      $("#ans").val("");
      break;
     
  }
}
function main() {
  $('.calcBtn').button();
  $('.calcBtn').on('click', setInput);
}

$(document).ready( main );