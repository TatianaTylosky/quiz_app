$(document).ready(function() {

	$("#button").on("click", function() {

		submitted();
		window.event.returnValue = false;
		document.location.href = 'results.html';
		console.log("test 2");

	});


	function submitted() {
		console.log("test 1");
		var web_dev = false;
		var angular = 0;
		var ruby = 0;
		var python = 0;
		var swift = false;


		if (document.getElementById('none').checked) {
			web_dev = true;
		}

		else if (experience = "some") {
			web_dev = true;
		}

		else if (experience = "frontend") {
			angular++;
			web_dev = false;
		}

		else if (experience = "backend") {
			angular++;
			web_dev = false;
		}

		else {

		};


		if (learning_style = "ruby"){
			ruby++;
		}

		else if (learning_style = "python") {
			python++;
		}

		else {

		};


		if (goals = "swift") {
			swift = true;
		}

		else if (goals = "web_dev") {
			web_dev = true;
		}

		else if (goals = "ruby") {
			ruby++;
		}

		else if (goals = "python") {
			python++;
		}

		else if (goals = "angular") {
			angular++;
		}

		console.log(web_dev);
	};
});