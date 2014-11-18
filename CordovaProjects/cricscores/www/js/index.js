
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
    	startApp();
       
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       
    }
};

app.initialize();

function startApp(){
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
					




	
}
