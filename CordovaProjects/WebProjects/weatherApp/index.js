$(document).ready(function() {

	setInterval(function() {
		var time = new Date();
		time = time.toLocaleTimeString();
		$('#localTime').text(time);
	}, 1000);

	var country, state, city;
	$('#city').val("");

	var weatherUrl = "http://api.wunderground.com/api/e1a1a0df617dddbc/conditions/q/";
	var forecastURL = "http://api.wunderground.com/api/e1a1a0df617dddbc/forecast10day/q/";
	$('#but').hide();
	$('#gridView').hide();
	$('#display').hide();
	$('#imageDiv img').remove();

	$('#submit').on('click', function() {
		$('#gridView').empty();
		country = $('#country').val();
		state = $('#state').val();
		city = $('#city').val();
		$('#imageDiv img').remove();
		if (city == "")
			alert("enter city");
		else {

			if (country == "USA") {
				$('h2').text(state + "," + country);

				ajaxCall(state, city, function(msg) {

					if (msg.hasOwnProperty('current_observation')) {

						$('#temp').text(msg ['current_observation']['temperature_string']);

						//alert (msg ['current_observation']['local_time_rfc822'])
						$('#localTime').text(msg ['current_observation']['local_time_rfc822']);

						//alert ("weather " + msg ['current_observation']['weather']);
						if ((msg ['current_observation']['weather']) == "") {
							alert(123456);
							$('#weather').hide();
						} else {

							$('#weather').text(msg ['current_observation']['weather']);
						}

						//alert ("wind " + msg ['current_observation']['wind_string']);
						$('#wind').text(msg ['current_observation']['wind_string']);

						//alert ("humidity " + msg ['current_observation']['relative_humidity']);
						$('#humidity').text(msg ['current_observation']['relative_humidity']);
						var img = msg ['current_observation']['icon_url'];

						$('<div><img src="' + img + '"/></div>').css('width', '100%').appendTo('#imageDiv');

						
						$('#display').show();
						$('#but').show();
					} else
						alert("Entered city is wrong");

				});
			} else {
				$('h2').text(city + "," + country);

				ajaxCall(country, city, function(msg) {

					if (msg.hasOwnProperty('current_observation')) {

						$('#temp').text(msg ['current_observation']['temperature_string']);

						//alert (msg ['current_observation']['local_time_rfc822'])
						//	$('#localTime').text(msg ['current_observation']['local_time_rfc822']);

						//alert ("weather " + msg ['current_observation']['weather']);
						if ((msg ['current_observation']['weather']) == "") {

							$('#weather-div').hide();

						} else {

							$('#weather').show();
							$('#weather').text(msg ['current_observation']['weather']);
						}

						//alert ("wind " + msg ['current_observation']['wind_string']);
						$('#wind').text(msg ['current_observation']['wind_string']);

						//alert ("humidity " + msg ['current_observation']['relative_humidity']);
						$('#humidity').text(msg ['current_observation']['relative_humidity']);

						var img = msg ['current_observation']['icon_url'];

						$('<div><img src="' + img + '"/></div>').css('width', '100%').appendTo('#imageDiv');
						$('#display').show();
						$('#but').show();

					} else
						alert("Entered city is wrong");

				});
			}
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
		$('#imageDiv img').remove();

	});

	$('#but').on('click', function() {
		$('#gridView').empty();

		if (city == "")
			alert("enter city");
		if (country == "USA") {

			foreacast10days(state, city, function(msg) {
				$('#gridView').show();

				if (msg.hasOwnProperty('forecast')) {
					for (var i = 1; i <= 9; i++) {

						var date = msg.forecast.simpleforecast.forecastday[i].date.monthname + " " + msg.forecast.simpleforecast.forecastday[i].date.day + "," + msg.forecast.simpleforecast.forecastday[i].date.weekday;
						var title = msg.forecast.simpleforecast.forecastday[i].date.weekday;
						var img = msg.forecast.simpleforecast.forecastday[i].icon_url;
						var humidity = msg.forecast.simpleforecast.forecastday[i].avehumidity;
						var condition = msg.forecast.simpleforecast.forecastday[i].conditions;

							var newdiv = $('<div> </div>').css("background-color", "#7DFDFE").appendTo('#gridView');

						$('<p> <h3>' + date + '</h3></p>').appendTo(newdiv);
						$('<img src="' + img + '"/>').appendTo(newdiv);
						$('<p> ' + condition + '</p>').appendTo(newdiv);
						$('<p> ' + "<b>Avg Humidity: </b>" + humidity + "%" + '</p>').appendTo(newdiv);

					}
				} else
					alert("Entered city is wrong");

			});
		} else {

			foreacast10days(country, city, function(msg) {
				$('#gridView').show();

				if (msg.hasOwnProperty('forecast')) {
					for (var i = 1; i <= 9; i++) {

						var date = msg.forecast.simpleforecast.forecastday[i].date.monthname + " " + msg.forecast.simpleforecast.forecastday[i].date.day + "," + msg.forecast.simpleforecast.forecastday[i].date.weekday;
						var title = msg.forecast.simpleforecast.forecastday[i].date.weekday;
						var img = msg.forecast.simpleforecast.forecastday[i].icon_url;
						var humidity = msg.forecast.simpleforecast.forecastday[i].avehumidity;
						var condition = msg.forecast.simpleforecast.forecastday[i].conditions;

						var newdiv = $('<div> </div>').css("background-color", "#7DFDFE").appendTo('#gridView');
						$('<p> <h3>' + city + "," + state + '</h3></p>').appendTo(newdiv);
						$('<p> <h4>' + date + '</h4></p>').appendTo(newdiv);
						$('<img src="' + img + '"/>').appendTo(newdiv);
						$('<p> ' + condition + '</p>').appendTo(newdiv);
						$('<p> ' + "<b>Avg Humidity: </b>" + humidity + "%" + '</p>').appendTo(newdiv);

					}

				} else
					alert("Entered city is wrong");

			});
		}
	});

	function foreacast10days(con, ct, success) {
		newURL = forecastURL + con + "/" + ct + ".json";
		//	alert(newURL);
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
