$(document).ready(function(){
	setTimeout(function(){
$("button[id*='abc']").on("click",function(event){
	
	
	alert("here");
});
},100);
var button= "<button id='abc'> Click1 </button><button id='abcd'> Click2 </button><button id='abcde'> Click3 </button>";

$("body").append(button);


// $("#abc").on("click",function(event){
// 	
// 	
	// alert(11111);
// });
// $( "#abcd" ).click(function() {
  // $( "#abc" ).click();
// });
// $( "#abcde" ).click(function() {
  // $( "#abc" ).click();
// });
});
