
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
     
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       
    }
};

app.initialize();

var cross;
function myFunction(val)
{
	
	 cross="X";
	 document.getElementById(val).value=cross;
	 
	 
	 if (cross == "X")
	 	cross= "O";
	 	else 
	 	cross="X";
	
	alert(val+ " is clicked");
}
