
document.getElementById("mySubmit").onclick = function(){ createDivision(); };



var inputColor;
var inputText;


function createDivision() {	
	
	 inputColor=  document.getElementById("inputColor").value;
	 inputText=  document.getElementById("inputText").value;

/*-------------------------------------------------------------------------------------------------------------------*/
	// Validation for empty textInput and colorInput textfields
	if (inputText=="")
	{
		document.getElementById("inputText").style.borderColor="red"	;
	}
	
	if (inputColor=="")
	{
		document.getElementById("inputColor").style.borderColor="red";
	}
	
	else{
		document.getElementById("inputText").style.borderColor="";
		document.getElementById("inputColor").style.borderColor="";


/*-------------------------------------------------------------------------------------------------------------------*/
// Creating 1st Dynamic Divsion
	var divElement1 = document.createElement("div");  
 	divElement1.id = "div1";
 	divElement1.style.height="30%";
 	divElement1.style.width="30%";
 	divElement1.style.background= "#FFFFFF";
 	divElement1.style.cssFloat= "left";
 	divElement1.style.border= "1px solid";
 	divElement1.style.borderTopLeftRadius = "2em";
 	divElement1.style.marginBottom="50px";
 	divElement1.style.marginRight="50px";
 	
	document.body.appendChild(divElement1);

// Creating 1st paragraph which will be appended to its parent div
	var para1= document.createElement("p");
	para1.id="p1";
	para1.style.textAlign="center";
	divElement1.appendChild(para1);
/*-------------------------------------------------------------------------------------------------------------------*/





/*-------------------------------------------------------------------------------------------------------------------*/
// Creating 2nd Dynamic Divsion
	var divElement2 = document.createElement("div");  
 	divElement2.id = "div2"; 
 	divElement2.style.height="30%";
 	divElement2.style.width="30%";
 	divElement2.style.background= "#FFFFFF";
 	divElement2.style.cssFloat= "right";
 	divElement2.style.border= "1px solid";
 	divElement2.style.borderTopRightRadius = "2em"; 
 	divElement2.style.marginBottom="50px";
 	divElement2.style.marginLeft="50px";
	document.body.appendChild(divElement2);

// Creating 2nd paragraph which will be appended to its parent div
	var para2= document.createElement("p");
	para2.id="p2";
	para2.style.textAlign="center";
	divElement2.appendChild(para2);
/*-------------------------------------------------------------------------------------------------------------------*/

 
 
/*-------------------------------------------------------------------------------------------------------------------*/
// Creating 3rd Dynamic Divsion
	var divElement3 = document.createElement("div");  
	divElement3.id = "div3";
	divElement3.style.height="30%";
 	divElement3.style.width="30%";
	divElement3.style.background= "#FFFFFF";
 	divElement3.style.cssFloat= "left";
 	divElement3.style.border= "1px solid";
	divElement3.style.borderBottomLeftRadius = "2em";
	divElement3.style.marginTop="50px";
	divElement3.style.marginRight="50px";
	document.body.appendChild(divElement3);

// Creating 3rd paragraph which will be appended to its parent div
	var para3= document.createElement("p");
	para3.id="p3";
	para3.style.textAlign="center";
	divElement3.appendChild(para3);
/*-------------------------------------------------------------------------------------------------------------------*/
 
 

/*-------------------------------------------------------------------------------------------------------------------*/	
// Creating 4th Dynamic Divsion
 	var divElement4 = document.createElement("div");  
 	divElement4.id = "div4";  
 	divElement4.style.height="30%";
 	divElement4.style.width="30%";
 	divElement4.style.background= "#FFFFFF";
 	divElement4.style.cssFloat= "right";
 	divElement4.style.border= "1px solid";
 	divElement4.style.borderBottomRightRadius = "2em";
 	divElement4.style.marginTop="50px";
 	divElement4.style.marginLeft="50px";
  	document.body.appendChild(divElement4);

// Creating 4th paragraph which will be appended to its parent div
	var para4= document.createElement("p");
	para4.id="p4";
	para4.style.textAlign="center";
	divElement4.appendChild(para4);
/*-------------------------------------------------------------------------------------------------------------------*/
 
 


/*-------------------------------------------------------------------------------------------------------------------*/	
// Getting user inputs for text and color respectively
	var inputColor= document.getElementById("inputColor").value;
	var res= inputColor.split(",");
	
	var inputText= document.getElementById("inputText").value;
/*-------------------------------------------------------------------------------------------------------------------*/


/*-------------------------------------------------------------------------------------------------------------------*/	
// Setting the text and its color in the 1st paragraph of the 1st division
	document.getElementById("p1").innerHTML=inputText;
	document.getElementById("p1").style.color=res[0];
/*-------------------------------------------------------------------------------------------------------------------*/		



/*-------------------------------------------------------------------------------------------------------------------*/	
// Setting the text and its color in the 2nd paragraph of the 2nd division
	document.getElementById("p2").innerHTML=inputText;
	document.getElementById("p2").style.color=res[1];
/*-------------------------------------------------------------------------------------------------------------------*/



/*-------------------------------------------------------------------------------------------------------------------*/
// Setting the text and its color in the 3rd paragraph of the 3rd division
	document.getElementById("p3").innerHTML=inputText;
	document.getElementById("p3").style.color=res[2];
/*-------------------------------------------------------------------------------------------------------------------*/



/*-------------------------------------------------------------------------------------------------------------------*/
// Setting the text and its color in the 4th paragraph of the 4th division
document.getElementById("p4").innerHTML=inputText;
if (typeof(res[3])!='undefined'){
	document.getElementById("p4").style.color=res[3];
	}

else{
	document.getElementById("p4").style.color="green";
}
/*-------------------------------------------------------------------------------------------------------------------*/
}
}