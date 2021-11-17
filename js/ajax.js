function login(event) {
	event.preventDefault();
	var usuario = $('#username').val();
	var contra = $('#password').val();
  
	var datosRegistro = {
			"usuario" : usuario,
			"password" : contra,
	};
	$.ajax({
			url: "",
			type: "POST",
			data: JSON.stringify(datosRegistro),
			contentType: "application/json;charset=utf-8",
			dataType: "json",
			success: function(res) {
				if(res.inserted){
					alert(res.message);
					window.location.href = "";
				}
			},
			error: function(res) {
				console.log("error");
				var json_string = JSON.stringify(res);
				console.log("Error: " + json_string);
				alert("Error: " + json_string);
			}
	});
};

function signup() {
	var resultado = true;
	var complete_name = $('#complete_name').val();
	var email = $('#email').val();
	var phone = $('#phone').val();
	var password = $('#password').val();
	var confirm_password = $('#confirm_password').val();

	var patron = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	if (complete_name.length === 0 || email.length === 0 || phone.length === 0 || password.length === 0 || 	confirm_password.length === 0){
		resultado = false;
	}
	if (password !== confirm_password) {
		resultado = false;
	}
	if (!patron.exec(email)) {
		resultado = false;
	}
	if (resultado === true) {
		var datosRegistro = {
			"complete_name": complete_name,
			"email": email,
			"phone": phone,
			"password": password
		};
	}
	$.ajax({
		url: "",
		type: "POST",
		data: JSON.stringify(datosRegistro),
		contentType: "application/json;charset=utf-8",
		dataType: "json",
		success: function (res) {
			alert(res.message);
			window.location.href = "../../views/index.php";
		},
		error: function (res) {
			//var obj = $.parseJSON(res);
			//convertir el objeto JSON a texto
			var json_string = JSON.stringify(res);
			console.log("Error: " + json_string);
			//convertir el texto a un nuevo objeto
			alert("Error: alert");
		}
	});
	return;
	
};
