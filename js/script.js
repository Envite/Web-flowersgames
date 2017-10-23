$(document).ready(function(){
	
	$('.maceta').on('mouseenter',function(e){
		$('.test').css('display','block');
		$('.test').css('top',e.pageY-400);
		$('.test').css('left',e.pageX-400);
	});
	$('.maceta').on('mouseleave',function(){
		$('.test').css('display','none');
	});

});






