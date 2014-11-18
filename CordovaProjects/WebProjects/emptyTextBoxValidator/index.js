$(document).ready(function(){
	var flag=1;
	$(":input:text").val("");
	$("form").submit(function(){
			var flag=true;
			$("span").remove();
		$('input[type=text]').each (function(event){
			
			
			if ($(this).val()==""){
				$("<span style='color:red'> Can't be empty </span>").insertAfter($(this));
				flag=false;
				//$(this).focus();
			}
			
			
		});
			if (flag==false){
				return false;
			}
			
		});
		
	});

