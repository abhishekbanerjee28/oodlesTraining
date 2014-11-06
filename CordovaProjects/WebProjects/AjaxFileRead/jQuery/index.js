$(document).ready(function(){
	var results;
	var count=0;
	
	$.ajax({
		url: "tabpan.json", 
		dataType:"json", 
		success: function(data){
			results=data;
			alert (results);
			
			display();
			displayTable();
			}});
			
			function display(){
				 $.each (results , function (){
				 	
					$.each (this , function (key,value) {
					count++;
					
				});
				
			});
		}
	function displayTable(){
		var row= results.length;
		var col= count/row;
		var HTML = "<table border=1>";
		HTML+= "<tr><th>id</th><th>heading</th><th>title</th><th>name</th><th>html</th></tr>";
		
				$(results).each(function(i,val){
				HTML += "<tr><td>" + val.id+ "</td><td>" + val.heading + "</td><td>" + val.title+ "</td><td>"+val.name+"</td><td>"+val.html +"</td></tr>";
				
	
		
		
	});
	HTML += "</table>";
	$("div#results").append(HTML);
	}
});	
