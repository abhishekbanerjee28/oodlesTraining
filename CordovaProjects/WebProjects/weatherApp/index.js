$(document).ready(function() {
	var country, state, city;
	var weatherUrl = "http://api.wunderground.com/api/e1a1a0df617dddbc/conditions/q/";
	var forecastURL= "http://api.wunderground.com/api/e1a1a0df617dddbc/forecast10day/q/";
	$('#but').hide();

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
					var img = msg ['current_observation']['icon_url'];

					$('<div><img src="' + img + '"/></div>').css('width', '100%').appendTo('#imageDiv');

					$('<div ui-input-btn ui-btn ui-corner-all" id="but"><input type="button" data-enhanced="true" value="Next 10 Days Forecast"/> </div>').appendTo('#but');
					alert("button inserted");
					$('#but').show();
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

					var img = msg ['current_observation']['icon_url'];

					$('<div><img src="' + img + '"/></div>').css('width', '100%').appendTo('#imageDiv');
					$('#but').show();

				} else
					alert("Entered city is wrong");

			});
		}
	});

	function ajaxCall(con, ct, success) {

		newURL = weatherUrl + con + "/" + ct + ".json";
		//alert(newURL);
		$.ajax({
			url : newURL,
			dataType : "jsonp",
		}).done(function(msg) {
			success(msg);

		}).fail(function(err) {
			alert("error " + err);
		});

	}


	$('#country').on('change', function() {

		var myselect = $("select#country");
		myselect = $("select#state");
		myselect[0].selectedIndex = 0;
		myselect.selectmenu("refresh");
		$('#city').val("");
		$('#temp').text("");
		$("#imageDiv").text("");

		$('#localTime').text("");

		$('#weather').text("");

		$('#wind').text("");

		$('#humidity').text("");

	});
	
	$('#but').on('click', function() {
		
			if (city == "")
			alert("enter city");
		if (country == "USA") {

			foreacast10days(state, city, function(msg) {

				if (msg.hasOwnProperty('forecast')) {
					for (var i=0;i<=19;i=i+2){
						alert (i);
						alert (msg.forecast.txt_forecast.forecastday[i].title);
						}
				} else
					alert("Entered city is wrong");

			});
		} else {

			foreacast10days(country, city, function(msg) {

				if (msg.hasOwnProperty('forecast')) {
					for (var i=0;i<=19;i=i+2){
						//alert (i);
						alert (msg.forecast.txt_forecast.forecastday[i].title);
						}
				} else
					alert("Entered city is wrong");

			});
		}
	});

	function foreacast10days(con, ct, success) {
		newURL = forecastURL + con + "/" + ct + ".json";
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

});
