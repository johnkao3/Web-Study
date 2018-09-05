function cleanNumber() {
  // 做完運算清空欄位1與2
  $("#num01").val('');
  $("#num02").val('');
}

function calc(e) {
  
  console.log(e);

  var sID = this.id;
  var num01 = $("#num01").val() * 1;
  var num02 = $("#num02").val() * 1; 

  cleanNumber();
  var total;

  console.log(sID);

  if ( sID == 'add'){
    total = num01 + num02;
  }
  if (sID == 'minus'){
    total = num01 - num02;
  }
  if (sID == 'multi'){
    total = num01 * num02;
  }
  if (sID == 'divide'){
    if( num02 == 0){
      total = "不能除以0...";
    }
    else {
      total = num01 / num02;
    }
  }
  $("#total").val(total);
}

function mainCalc() {
  // event registration
  $("#add").on('click', calc);
  $("#minus").on('click', calc);
  $("#multi").on('click', calc);
  $("#divide").on('click', calc);
}