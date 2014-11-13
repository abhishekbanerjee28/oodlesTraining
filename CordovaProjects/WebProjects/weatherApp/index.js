

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
