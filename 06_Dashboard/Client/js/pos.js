function chgTot() {

	$("#bag" ).val( ($("#outside").prop("checked") ? $("#outside").val() : 0 ));
	$("#rate").val( ($("#extra"  ).prop("checked") ? $("#extra"  ).val() : 0 ));

	var a=$("#subTotal").val();
	var b=$("#rate").val();
	var c=$("#bag").val();
	$("#total_pos").val( Math.round( a*1 + a*(b/100) + (c*1) ) );
}

function chgSubTotal() {
	$("#subTotal").val( $("#unitPrice").val() * $("#qty").val() );
  chgTot();
}

function showStatus() {
  n = $("input[name='styles']:checked").val();
  $("#unitPrice").val( price[n][ $("#menus option:selected").index() ] );
  chgSubTotal();
}

function chg() {
  console.log(this.value)
  var n = ( typeof(this.value)=="string" ? this.value : "0" );
  $("#menus option").remove();  // remove all options
  for ( var i in opt[n] ) {
    var opt1 = new Option( opt[n][i], price[n][i] );
    $("#menus").append( opt1 );
  }
  showStatus();
}

function addItem() {
	var n = $("input[name='styles']:checked").val();
	var index = $("#menus option:selected").index();
	var qty = $("#qty").val();
	var subTotal = price[n][index] * qty;

	var obj = {
		styles: n,
		menu_index: index,
		qty: qty
	}
	orderList.push(obj);

	var item =
		'<tr><th scope="row">'+
		orderList.length+'</th><td>'+
		opt[n][index]+'</td><td>'+
		price[n][index]+'</td><td>'+
		qty+'</td><td>'+
    subTotal+'</td><td>'+
    '<i class="fas fa-times fa-fw delItem"></i></td>';
  $("#orderList").append(item);

	orderTotal = 0;
	for (var i = 0;i< orderList.length;++i) {
		// a = b + a == a += b
		orderTotal += price[orderList[i].styles][orderList[i].menu_index]* orderList[i].qty *1
		$("#orderTotal").html(orderTotal)
	}
}

function delItem(e) {
  console.log(e)
}

function removeAll() {
	orderList = [];
	$("#orderList").empty();
	$("#orderTotal").html(0);
}

function mainPos() {
  $("input[name='styles']").on('change', chg);
  $("#menus").on("change", showStatus); // 菜單
  $("#qty"    ).on("change", showStatus); // 數量
  $("#outside").on("change", chgTot);  // 外帶
  $("#extra"  ).on("change", chgTot);  // 加量
	$("#addItem").on('click', addItem);
  $("#removeAll").on('click', removeAll);
  $("#orderList").on('click','.delItem', delItem);
  chg();
}

var opt, price;  // global var. declaration
// global var. initialization
opt = [
  ['00>燒餅','01>油條','02>豆漿'],
  ['10>漢堡','11>薯條','12>可樂','13>奶茶'],
  ['20>馬鈴署','21>玉米濃湯','22>起司培根','23>奶昔']
];
price = [
  [10,15,12], // new Array(10,15,12);
  [20,25,15,25],
  [50,35,25,15]
];

var orderList = [];
var orderTotal = 0;
