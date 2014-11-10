$(document).ready(function (){
	var text1,text2;
	//alert (111);
	$("#myButton").on("click",getValue);
	//alert (333);
	
	
	
	
});


function getValue()
{
		//alert (222);
		var text1= $('#text1').val();
		var text2= $('#text2').val();
	//	alert (text1 + "   " + text2);
		var openDB= window.openDatabase("demoDatabase", "1.0", "sqLiteDemo", 1*1024*1024);
		openDB.transaction(populateDB, errorCB, successCB);
		
		function populateDB (db){
		
	
			db.executeSql('DROP TABLE IF EXISTS DEMO');
     		db.executeSql('CREATE TABLE IF NOT EXISTS DEMO (fname TEXT, lname TEXT)');
     		db.executeSql('INSERT INTO DEMO (fname,lname) VALUES (?,?)',[text1,text2]);
     		
     		executeQuery();
 	 	};
  		
  		function errorCB (db,err) {
  			alert ("some error " + err);
  		};
  
  		function successCB() {
       		alert("success!");
       	};
       		
       	
 }
   		
   		function executeQuery(){
   			
   			var openDB= window.openDatabase("demoDatabase", "1.0", "sqLiteDemo", 1*1024*1024);
  	 		openDB.transaction (function (db) {
       		db.executeSql ('SELECT * FROM DEMO', [], dataHandler,errorHandler); 
     		});
     		
     		function dataHandler (db,results){
     			
     		alert(JSON.stringify(results.rows.item(0)));
     		var val1= results.rows.item(0);
     		
     		$("#fetchdatabase").append(val1.fname + " " + val1.lname);
     		
     		
     	
     	
     		}
     		function errorHandler (db,err){
     			alert ("error in select statement " + err);
     		}
     		
     }
    

