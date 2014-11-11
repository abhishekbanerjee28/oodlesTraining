$(document).ready(function(){
	var wid=  $("#myDiv").width();
	var div=$("#myDiv");
	 var oldwid=wid;
	 var flag1= true;
	 var flag2= false;
  /*	
  $("#animate").click(function(){
  
  	

   if ( wid!=100 && flag1==false )
   {
   //	alert (wid);
   	wid= wid -50;
  	$("#myDiv").width(wid);
  	if (wid<=100){
  		flag2=false;
  		flag1=true;
  	}
   }
   
  if (wid>=100 && wid<=300 && flag2==false  )
  {
  	//alert (wid);
  	wid= wid +50;
  	$("#myDiv").width(wid);
  	if (wid>300){
  	flag2=true;
  	flag1=false;
  	}
  }
});

}); */

 $("#animate").click(function(){
 	//alert (wid);
 	if (wid==oldwid)
 	{
 		 flag1= true;
		 flag2= false;
 	}
 	
 	if ( wid!=oldwid && flag1==false )
 	{	
 		wid-=(oldwid/2);
 		div.animate({
     	width: wid 
    	});
 	}
    if (wid>=oldwid && wid<(oldwid*2.5) && flag2==false )
    {
    	wid+=(oldwid/2);
    	//alert (111);
     	div.animate({
     	width: wid 
    	});
    	
    	if (wid>=(oldwid*2.5)){
  		flag2=true;
  		flag1=false;
  		}
    	
    }
  
  });
   
  });


 