new WOW().init();

$(document).ready(function () {

	var root = 'json/sommelier.json';

	$.get('html/template.html', function ( userTemplate ) {
		$.ajax({
			url: root,
			method: 'GET', //GET, POST, PUT, DELETE
			contentType: 'application/json', //ask server to return json
			dataType: 'json', //says to server we are sending json
			//Call if request return successfully
			success: function (response) {
				var template = Handlebars.compile($(userTemplate)[0].outerHTML); //convert from jquery to string
				for(var i = 0; i < 6 ; i ++) {
					var html = template(response[i]);
					$('#qui').append(html)
				}
			},
			//Call in case of request error
			error: function (request, errorType, errorMessage){
				alert('Error: ' + errorType + ', message: ' + errorMessage)
				console.log(request);
			}
		});
	});
});