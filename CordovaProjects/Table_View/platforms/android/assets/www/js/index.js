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
       //startapp();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
};

app.initialize();

function startapp(){
	
	
	var rw=document.getElementById("row").value;
	var cl=document.getElementById("col").value;
    var tr,td;
		
	
	var ourDiv= document.getElementById("dynamicTable");
	var tab=document.createElement("table");
    
	var tblBody = document.createElement("tbody");
   
	for (var i=0;i<rw;i++) {
		
		tr = document.createElement("tr");
		
		for (var j=0;j<cl;j++) {
		
		
		td=document.createElement("td");
            
		td.innerHTML="table content";
            
		tr.appendChild(td);
            
		}
		tblBody.appendChild(tr);
        console.log("HERE");
	}
	tab.appendChild(tblBody);
	
	ourDiv.appendChild(tab);
    console.log("HTML  "+ourDiv);
	tab.setAttribute("border","2");
	alert("table created")	;
}