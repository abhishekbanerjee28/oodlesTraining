$(document).ready(function(){
	//alert (11);
	var menuItems= ["Home","About Us","Services", "Contact Us"];
 	var myList= $('<ul> </ul>');
 	myList.addClass('uiList');
 	myList.css("list-style-type", "none");
 	var li;
 	var ind;
 	$.each(menuItems,function(i,val){
 		li= $('<li></li>');
 		li.css ({ "float":"left", "padding": "0px 10px", "line-height" : "50px" , "border":"1px solid","background-color": "#ADD8E6" });
 		li.addClass('uiItem');
 		//li.text(menuItems[i]);
 		li.text(val);
 		li.appendTo(myList);
	});
 	
 	myList.appendTo('#dynamicMenu');
 	$('.uiItem').on('click', function(){
 		ind= $(this).index();
 		
 		
 		$('.uiItem').css( "background-color", "#ADD8E6");
 		
 		$(this).css( "background-color", "#00FFFF");
 	});
 	$("li").on('mouseover', function(){
 		
 		var temp= ($(this).index());
 		
 		//console.log($("ul li:eq("+temp+")").addClass('myClass').length);
 		$("ul li:eq("+temp+")").addClass('myClass');
 	
 	});
 	
 	$('.uiItem').on('mouseout', function(){
 		
 		$("ul li").removeClass('myClass');
 	});
});