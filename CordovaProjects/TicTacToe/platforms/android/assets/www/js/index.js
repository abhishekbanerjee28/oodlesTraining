var app = {
	initialize : function() {
		this.bindEvents();
	},
	bindEvents : function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady : function() {
		document.getElementById("button1").onclick = function() {
			myFunction("button1", flagB1);
			flagB1 = true;
		};
		document.getElementById("button2").onclick = function() {
			myFunction("button2", flagB2);
			flagB2 = true;
		};
		document.getElementById("button3").onclick = function() {
			myFunction("button3", flagB3);

			flagB3 = true;
		};

		document.getElementById("button4").onclick = function() {
			myFunction("button4", flagB4);
			flagB4 = true;
		};

		document.getElementById("button5").onclick = function() {
			myFunction("button5", flagB5);
			flagB5 = true;
		};

		document.getElementById("button6").onclick = function() {
			myFunction("button6", flagB6);
			flagB6 = true;
		};
		document.getElementById("button7").onclick = function() {
			myFunction("button7", flagB7);
			flagB7 = true;
		};
		document.getElementById("button8").onclick = function() {
			myFunction("button8", flagB8);
			flagB8 = true;
		};
		document.getElementById("button9").onclick = function() {
			myFunction("button9", flagB9);
			flagB9 = true;
		};

		document.getElementById("reset").onclick = function() {
			alert("reset clicked");
			myReset();
		};
	},

	receivedEvent : function(id) {

	}
};

var flagB1 = false;
var flagB2 = false;
var flagB3 = false;
var flagB4 = false;
var flagB5 = false;
var flagB6 = false;
var flagB7 = false;
var flagB8 = false;
var flagB9 = false;

var but1, but2, but3, but4, but5, but6, but7, but8, but9;

var cross = "X";

function myFunction(val, flagVal) {
	if (flagVal == false) {
		document.getElementById(val).value = cross;
		if (cross == "X") {
			cross = "O";
		} else {
			cross = "X";
		}
		resultNew(val);
		//result();
		// alert("button1 " + but1 + " button2 " + but2 + " button3 " + but3);

	}

}

function resultNew() {
	but1 = document.getElementById("button1").value;
	but2 = document.getElementById("button2").value;
	but3 = document.getElementById("button3").value;
	but4 = document.getElementById("button4").value;
	but5 = document.getElementById("button5").value;
	but6 = document.getElementById("button6").value;
	but7 = document.getElementById("button7").value;
	but8 = document.getElementById("button8").value;
	but9 = document.getElementById("button9").value;
	//alert(but1 + "    " + but2 + "     " + but3 + "     " + but4 + "     " + but5 + "     " + but6 + "     " + but7 + "     " + but8 + "     " + but9);
	if(cross == "O"){
		winner = "X";
	}
	else{
		winner = "O";
	}
	if ((but1 == but2) && (but2 == but3) && (but1 == but3) && (but2 == but3) && (but1 != "") && (but2 != "") && (but3 != "")) {
		alert(winner + " is winner");
	} else if ((but4 == but5) && (but5 == but6) && (but4 == but6) && (but4 != "") && (but5 != "") && (but6 != "")) {
		alert(winner + " is winner");
	} else if ((but7 == but8) && (but8 == but9) && (but7 == but9) && (but7 != "") && (but8 != "") && (but9 != "")) {
		alert(winner + " is winner");
	} else if ((but1 == but5) && (but5 == but9) && (but1 == but9) && (but1 != "") && (but5 != "") && (but9 != "")) {
		alert(winner + " is winner");
	} else if ((but3 == but5) && (but5 == but7) && (but3 == but7) && (but3 != "") && (but5 != "") && (but7 != "")) {
		alert(winner + " is winner");
	} else if ((but1 == but4) && (but4 == but7) && (but1 == but7) && (but1 != "") && (but4 != "") && (but7 != "")) {
		alert(winner + " is winner");
	} else if ((but2 == but5) && (but5 == but8) && (but2 == but8) && (but2 != "") && (but5 != "") && (but8 != "")) {
		alert(winner + " is winner");
	} else if ((but3 == but6) && (but6 == but9) && (but3 == but9) && (but3 != "") && (but6 != "") && (but9 != "")) {
		alert(winner + " is winner");
	} else {
		if ((but1 != "") && (but2 != "") && (but3 != "") && (but4 != "") && (but5 != "") && (but6 != "") && (but7 != "") && (but8 != "") && (but9 != "")) {
			alert("Draw!!!!");
		}
	}
}

function result() {
	//alert("button1 " + but1 + " button2 " + but2 + " button3 " + but3);
	if ((but1 === but2 && but2 === but3) && (but1 != "") && (but2 != "") && (but3 != "")) {

		alert(cross + " is winner");
		myReset();

	} else if ((but4 === but5 && but5 === but6) && (but4 != "") && (but5 != "") && (but6 != "")) {

		alert(cross + " is winner");
		myReset();
	} else if ((but7 === but8 && but8 === but9) && (but7 != "") && (but8 != "") && (but9 != "")) {

		alert(cross + " is winner");
		myReset();
	} else if ((but1 === but5 && but5 === but9) && (but1 != "") && (but5 != "") && (but9 != "")) {

		alert(cross + " is winner");
		myReset();
	} else if ((but3 === but5 && but5 === but7) && (but3 != "") && (but5 != "") && (but7 != "")) {

		alert(cross + " is winner");
		myReset();
	} else if ((but1 === but4 && but4 === but7) && (but1 != "") && (but4 != "") && (but7 != "")) {

		alert(cross + " is winner");
		myReset();
	} else if ((but2 === but5 && but5 === but8) && (but2 != "") && (but5 != "") && (but8 != "")) {

		alert(cross + " is winner");
		myReset();
	} else if ((but3 === but6 && but6 === but9) && (but3 != "") && (but6 != "") && (but9 != "")) {

		alert(cross + " is winner");
		myReset();
	} else {
		alert(1213);
		if ((but1 != "") && (but2 != "") && (but3 != "") && (but4 != "") && (but5 != "") && (but6 != "") && (but7 != "") && (but8 != "") && (but9 != "")) {
			alert("Its a DRAW !!!");
			myReset();
		}
	}

}

function myReset() {

	//alert("inside myReset function");
	document.getElementById("button1").value = "";
	document.getElementById("button2").value = "";
	document.getElementById("button3").value = "";
	document.getElementById("button4").value = "";
	document.getElementById("button5").value = "";
	document.getElementById("button6").value = "";
	document.getElementById("button7").value = "";
	document.getElementById("button8").value = "";
	document.getElementById("button9").value = "";

}

app.initialize();

