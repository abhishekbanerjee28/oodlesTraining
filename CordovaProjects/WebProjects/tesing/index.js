$(document).ready(function() {
var url_allMatches= "http://cricscore-api.appspot.com/csa";
					
					$("#allMatches").on('click', function (){
						//alert (111);
						$('#displaytable').empty();
				// Performing ajax request 
					ajaxCall (url_allMatches, function (msg){
						//alert (msg);
						createTable (msg);
					});
					});

					function ajaxCall (url_allMatches, success){
						$.ajax({
							url: url_allMatches,
							datatype: "jsonp",
						}).done (function(msg){
							success(msg);
						}).fail(function (error){
							alert ("Error : " + error);
						});
					}
					
					
					
					
					function createTable(msg){
						var table= $('<table border="1" > <tr> <th> Current Macthes </th> </tr> </table>').appendTo('#displaytable');
						for (var i=0;i<msg.length;i++){
						//alert (msg[i].t1);
						 $('<tr> <td style="text-align: centre;">' + msg[i].t2 + " VS " + msg[i].t1 + '</td></tr>').appendTo(table);
						}
						
					}
});