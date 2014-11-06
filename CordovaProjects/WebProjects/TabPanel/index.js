



$(document).ready(function(){
	var selectedIndex=0;
	var elements= document.getElementsByClassName("myTab");
	var backColor=null;
	$( ".TabPane" ).first().css( "z-index",3);
	$( ".myTab" ).first().css( "background-color", "red" );
	
	
	$('.myTab').mouseover (function(){
		var ind= $(this).index() ;
		backColor=$(this).css("background-color");
		
		//if (selectedIndex!=index)		
		$(".myTab").eq(ind).css( "background-color", "green");
		
	});
	
	$('.myTab').mouseout (function(){
		var ind=  $(this).index() ;
		//alert(backColor);
		if (selectedIndex==ind)
		$(".myTab").eq(ind).css( "background-color", "red");
		else
		$(".myTab").eq(ind).css( "background-color", "white");
		
	});
	
	$('.myTab').click (function(){
		var ind= ( $(this).index() ); 
		selectedIndex=ind;
		
		$( ".TabPane" ).css( "z-index",2);
		$( ".TabPane" ).eq( ind ).css( "z-index",4);
		$(".myTab").css( "background-color", "white");
		$(this).css( "background-color", "red");
		
		
	});

	
});
