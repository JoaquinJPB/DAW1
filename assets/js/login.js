function iniciarsesion(event) {
	event.preventDefault();
	var usuario = $('#cuenta').val();
	var contra = $('#clave').val();
  
	var datosRegistro = {
			"usuario" : usuario,
			"password" : contra,
	};
  
	$.ajax({
			url: window.location.pathname + "../../inicio.php",
			type: "POST",
			data: JSON.stringify(datosRegistro),
			contentType: "application/json;charset=utf-8",
			dataType: "json",
			success: function(res) {
					alert(res.message);
					window.location.href = window.location.pathname + "../../";
			},
			error: function(res) {
					var json_string = JSON.stringify(res);
					console.log("Error: " + json_string);
					alert("Error: " + json_string);
			}
	});
};

function registrarse() {
	var resultado = true;
	var dni = $('#dni').val();
	var usuario = $('#cuenta').val();
	var contra = $('#clave').val();
	var confirmar = $('#confirmarclave').val();
	var correo = $('#correo').val();

	var patron = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	var patron_dni = /[0-9]{8}[A-Z]/;
	if (dni.length === 0 || usuario.length === 0 || contra.length === 0 || confirmar.length === 0 || correo.length === 0) {
		alert('Algún campo esta vacio');
		resultado = false;
	}
	if (contra !== confirmar) {
		console.log('No son iguales');
		alert('Las contraseña puestas son distintas');
		resultado = false;
	}
	if (!patron.exec(correo)) {
		alert('email no es válido');
		resultado = false;
	}
	if (!patron_dni.exec(dni)) {
		alert('DNI no valido');
		resultado = false;
	}

	if (resultado === true) {
		var datosRegistro = {
			"dni": dni,
			"usuario": usuario,
			"password": contra,
			"correo": correo
		};
	}


	$.ajax({
		url: "../../registro.php",
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