document.getElementsByTagName('body')[0].onload= function () {
	var file= "tabpan.json";
	var request;
	var data;
	if (window.XMLHttpRequest){
 		request=new XMLHttpRequest();
 		alert(request);
 	}
 	else {
    	request=new ActiveXObject("Microsoft.XMLHTTP");
    	alert(request);
    }
    	
  		request.onreadystatechange=function (){
  			//alert("inside function");
  			if (request.readyState==4 && request.status==200){
  				 data= JSON.stringify(request.responseText);
  				 data = JSON.parse(data);
  				document.getElementsByTagName("body")[0].innerHTML = data;
  			}
  			
  			
  		};
  	
		request.open("GET",file,true);
			request.send();
  			
};
