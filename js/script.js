$(document).ready(function(){

var m = "¿Quieres comprar una maceta?";
	
	$('#maceta1').on('mouseenter',function(e1){
		$('#balloon1').css('display','block');
var n = document.createElement("div");
n.appendChild(document.createTextNode(m));
document.getElementById("balloon1").appendChild(n);
	});
	$('#maceta1').on('mouseleave',function(){
		$('#balloon1').css('display','none');
document.getElementById("balloon1").removeChild(document.getElementById("balloon1").lastChild);
	});


	$('#maceta2').on('mouseenter',function(e1){
		$('#balloon2').css('display','block');
var n = document.createElement("div");
n.appendChild(document.createTextNode(m));
document.getElementById("balloon2").appendChild(n);
	});
	$('#maceta2').on('mouseleave',function(){
		$('#balloon2').css('display','none');
document.getElementById("balloon2").removeChild(document.getElementById("balloon2").lastChild);
	});

});
