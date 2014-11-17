
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
    	alert(555);
    	startapp();
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		
    }
};

app.initialize();

function startapp(){
	
	$("#loginFb").on("click", function (){
		alert(111);
		checkLoginState();
		});
	
	function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

	
	
	FB.getLoginStatus(function(response) {
 		 if (response.status === 'connected') {
    // the user is logged in and has authenticated your
    // app, and response.authResponse supplies
    // the user's ID, a valid access token, a signed
    // request, and the time the access token 
    // and signed request each expire
    var uid = response.authResponse.userID;
    var accessToken = response.authResponse.accessToken;
  } else if (response.status === 'not_authorized') {
    alert ("User is not authorized")
  } else {
    alert ("user is not logged in into facebook");
  }
 });
