function cleanNumber() {
  // 做完運算清空欄位1與2
  $("#num01").val('');
  $("#num02").val('');
}

function addNumber() {
  // Get Value
  // (第二種)
  var num01 = Number($("#num01").val() );
  var num02 = Number($("#num02").val() );

  cleanNumber();

  var total = (num01 + num02);

  $("#total").val(total);
}

function minusNumber() {
  var num01 = Number($("#num01").val() );
  var num02 = Number($("#num02").val() );

  cleanNumber();

  var total = num01 - num02;

  $("#total").val(total);
}

function multiNumber() {
  var num01 = Number($("#num01").val() );
  var num02 = Number($("#num02").val() );

  cleanNumber();

  var total = num01 * num02;

  $("#total").val(total);
}

function divideNumber() {
  var num01 = Number($("#num01").val() );
  var num02 = Number($("#num02").val() );
  
  cleanNumber();

  var total = num01 / num02;

  $("#total").val(total);
}

function main() {
  // event registration
  $("#add").on('click', addNumber);
  $("#minus").on('click', minusNumber);
  $("#multi").on('click', multiNumber);
  $("#divide").on('click', divideNumber);
}

// var 變數名稱
var index;
$(document).ready( main );
