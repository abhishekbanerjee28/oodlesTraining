/*jQuery(document).ready(function($) {

 $.ajax({
 url : "http://api.wunderground.com/api/Your_Key/conditions/q/CA/San_Francisco.json",
 dataType : "jsonp",
 success : function(parsed_json) {
 alert (11);

 var temp= parsed_json ['response']['version'];
 alert (temp);

 }
 });
 });
 */
/*
 jQuery(document).ready(function($) {
 alert(111);
 $('#countries').change(function(){
 //alert($( "#countries option:selected" ).text());
 var key= $( "#countries option:selected" ).text();
 alert(key);
 $.ajax({
 url : "country.json",
 dataType : "jsonp",
 success : function(data) {

 var values=[];

 switch (key)
 {

 case 'India':
 values=  data.India.split(",");
 case 'USA':
 values=  data.USA.split(",");
 case 'Australia':
 values=  data.Australia.split(",");
 case 'UK':
 values=  data.UK.split(",");
 }
 var cities = $("#cities");
 cities.empty();
 $.each(vals, function (index,v) {
 cities.append("<option>" + v + "</option>");

 });

 }
 });

 });

 });
 */

/*
 $(document).ready(function(){
 var countries = {"India" :["Delhi,Mumbai,Kolkata,Chennai, Bengaluru"], "USA": ["NewYork, Los Angeles, Houston, Las Vegas"],"UK": ["London,Edinburgh,Manchester,Oxford"],"Australia":["Sydney,Liverpool,Grafton,Penrith "]};

 var arr=[];
 var ind=0;

 $.each(countries, function (i,val){

 arr[ind++]=val.split(",");

 });

 for (var m=0; m<ind;m++,n++){
 for (n=0;n<ind;n++)
 alert ("m= " + m + "n= " +n  + "  " +  arr[m][n]);
 }

 $('#countries').change(function(){

 $('#secondDiv').empty();
 var citySelect= $('<select>').attr({'id':'default'}).appendTo('#secondDiv');
 $('select').selectmenu();
 $('<option>').text('Select city!').appendTo(citySelect);

 });http://api.wunderground.com/api/e1a1a0df617dddbc/conditions/q/CA/San_Francisco.json
 $('.selector').textinput('enable');

 });*/

$(document).ready(function() {
	var country, state;
	var weatherUrl = "http://api.wunderground.com/api/e1a1a0df617dddbc/conditions/q/";

	$('#submit').on('click', function() {
		country = $('#country').val();
		state = $('#state').val();
		city = $('#city').val();
		if (city == "")
			alert("enter city");
		if (country == "USA") {

			ajaxCall(state, city, function(msg) {

				if (msg.hasOwnProperty('current_observation')) {
					$('#temp').text(msg ['current_observation']['temperature_string']);

					//alert (msg ['current_observation']['local_time_rfc822'])
					$('#localTime').text(msg ['current_observation']['local_time_rfc822']);

					//alert ("weather " + msg ['current_observation']['weather']);
					$('#weather').text(msg ['current_observation']['weather']);

					//alert ("wind " + msg ['current_observation']['wind_string']);
					$('#wind').text(msg ['current_observation']['wind_string']);

					//alert ("humidity " + msg ['current_observation']['relative_humidity']);
					$('#humidity').text(msg ['current_observation']['relative_humidity']);
				} else
					alert("Entered city is wrong");

			});
		} else {

			ajaxCall(country, city, function(msg) {

				if (msg.hasOwnProperty('current_observation')) {
					$('#temp').text(msg ['current_observation']['temperature_string']);

					//alert (msg ['current_observation']['local_time_rfc822'])
					$('#localTime').text(msg ['current_observation']['local_time_rfc822']);

					//alert ("weather " + msg ['current_observation']['weather']);
					$('#weather').text(msg ['current_observation']['weather']);

					//alert ("wind " + msg ['current_observation']['wind_string']);
					$('#wind').text(msg ['current_observation']['wind_string']);

					//alert ("humidity " + msg ['current_observation']['relative_humidity']);
					$('#humidity').text(msg ['current_observation']['relative_humidity']);
				} else
					alert("Entered city is wrong");

			});
		}
	});

	function ajaxCall(con, ct, success) {

		newURL = weatherUrl + con + "/" + ct + ".json";
		alert(newURL);
		$.ajax({
			url : newURL,
			dataType : "jsonp",
		}).done(function(msg) {
			success(msg);

		}).fail(function(err) {
			alert("error " + err);
		});

	}


	$('#reset').on('click', function() {

		var myselect = $("select#country");
		myselect[0].selectedIndex = 0;
		myselect.selectmenu("refresh");
		myselect = $("select#state");
		myselect[0].selectedIndex = 0;
		myselect.selectmenu("refresh");
		$('#city').val("");
		$('#temp').text("");

		$('#localTime').text("");

		$('#weather').text("");

		$('#wind').text("");

		$('#humidity').text("");

	});

});
