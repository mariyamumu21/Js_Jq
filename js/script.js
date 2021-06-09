function textChange(){
	document.getElementById('h3').innerHTML =" WELCOME!";
}




$(document).ready(function(){

	//alert("Welcome to JQ!");

	$('btn').click(function(){
		alert("Welcome to JQ!")
	});


	$('#hide').click(function(){
		$('.message').hide();
	});

	$('#show').click(function(){
		$('.message').show();
	});
	$('#toggle').click(function(){
		$('.message').toggle();
	});

	$('#hide1').click(function(){
		$('.message').fadeOut(2000);
	});

	$('#show1').click(function(){
		$('.message').fadeIn(2000);
	});
	$('#toggle').click(function(){
		$('.message').fadeToggle(2000);
	});
});