var request = false;
var txt = "";
var cont = 0;

if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
}else if (window.ActiveXObject) {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
function obtenerdatosjson() {
	request.open('GET', "./json/usuarios.json");
	request.onreadystatechange = respuesta;
	request.send(null);
}
function respuesta() {
	if (request.readyState == 4 && request.status == 200) {
		var jsonobj = JSON.parse(request.responseText);
		document.getElementById("lista").innerHTML = "<option value=\"1\">Selecciona:</option>";
		for (var i in jsonobj.Empleados) {
			var option = document.createElement('option');
			option.value = jsonobj.Empleados[i].Nombre;
			option.innerHTML = jsonobj.Empleados[i].Nombre;
			document.getElementById("lista").appendChild(option);
		}
	}
}
function change(value){
	document.getElementById("detalle").innerHTML = "";
	var foto = document.getElementById("fotos");
	var divd = document.getElementById("detalle");
	jsonobj = JSON.parse(request.responseText);
	for(var i in jsonobj.Empleados){
		if (value == jsonobj.Empleados[i].Nombre) {
			var labell = document.createElement('label');
			var inputt = document.createElement('input');
			var divv = document.createElement('div');

			labell.innerHTML = "Nombre:";
			labell.className = "display-block";
			inputt.className = "form-control";
			divv.className = "col-lg-6";
			inputt.type = "text";
			inputt.value = jsonobj.Empleados[i].Nombre;
			inputt.id = "idnom";
			inputt.disabled = true;
			divv.id = "nom";
			divv.appendChild(labell);
			divv.appendChild(inputt);
			divd.appendChild(divv);
		}
	}
	for(var i in jsonobj.Empleados){
		if (value == jsonobj.Empleados[i].Nombre) {
			var labell = document.createElement('label');
			var inputt = document.createElement('input');
			var divv = document.createElement('div');
		
			labell.innerHTML = "Apellido:";
			labell.className = "display-block";
			inputt.className = "form-control";
			divv.className = "col-lg-6";
			inputt.type = "text";
			inputt.value = jsonobj.Empleados[i].Apellido;
			inputt.id = "idape";
			inputt.disabled = true;
			divv.id = "ape";
			divv.appendChild(labell);
			divv.appendChild(inputt);
			divd.appendChild(divv);
		}
	}
	for(var i in jsonobj.Empleados){
		if (value == jsonobj.Empleados[i].Nombre) {
			var labell = document.createElement('label');
			var inputt = document.createElement('input');
			var divv = document.createElement('div');
	
			labell.innerHTML = "Nacionalidad:";
			labell.className = "display-block";
			inputt.className = "form-control";
			divv.className = "col-lg-6";
			inputt.type = "text";
			inputt.value = jsonobj.Empleados[i].Nacionalidad;
			inputt.id = "idnac";
			inputt.disabled = true;
			divv.id = "nac";
			divv.appendChild(labell);
			divv.appendChild(inputt);
			divd.appendChild(divv);
		}
	}
	for(var i in jsonobj.Empleados){
		if (value == jsonobj.Empleados[i].Nombre) {
			var labell = document.createElement('label');
			var inputt = document.createElement('input');
			var divv = document.createElement('div');
	
			labell.innerHTML = "Direccion:";
			labell.className = "display-block";
			inputt.className = "form-control";
			divv.className = "col-lg-6";
			inputt.type = "text";
			inputt.value = jsonobj.Empleados[i].Direccion;
			inputt.id = "iddir";
			inputt.disabled = true;
			divv.id = "dir";
			divv.appendChild(labell);
			divv.appendChild(inputt);
			divd.appendChild(divv);
		}
	}
	for(var i in jsonobj.Empleados){
		if (value == jsonobj.Empleados[i].Nombre) {
			var labell = document.createElement('label');
			var inputt = document.createElement('input');
			var divv = document.createElement('div');
	
			labell.innerHTML = "Puesto:";
			labell.className = "display-block";
			inputt.className = "form-control";
			divv.className = "col-lg-6";
			inputt.type = "text";
			inputt.value = jsonobj.Empleados[i].Puesto;
			inputt.id = "idpue";
			inputt.disabled = true;
			divv.id = "pue";
			divv.appendChild(labell);
			divv.appendChild(inputt);
			divd.appendChild(divv);
		}
	}
	for(var i in jsonobj.Empleados){
		if (value == jsonobj.Empleados[i].Nombre) {
			var labell = document.createElement('label');
			var inputt = document.createElement('input');
			var divv = document.createElement('div');
	
			labell.innerHTML = "Telefono";
			labell.className = "display-block";
			inputt.className = "form-control";
			divv.className = "col-lg-6";
			inputt.type = "number";
			inputt.value = jsonobj.Empleados[i].Telefono;
			inputt.id = "idtel";
			inputt.disabled = true;
			divv.id = "tel";
			divv.appendChild(labell);
			divv.appendChild(inputt);
			divd.appendChild(divv);
		}
	}
	for(var i in jsonobj.Empleados){
		if (value == jsonobj.Empleados[i].Nombre) {
			var labell = document.createElement('label');
			var inputt = document.createElement('input');
			var divv = document.createElement('div');
		
			labell.innerHTML = "Fecha Nacimiento";
			labell.className = "display-block";
			inputt.className = "form-control";
			divv.className = "col-lg-6";
			inputt.type = "text";
			inputt.value = jsonobj.Empleados[i].Fecha_nac;
			inputt.id = "idfnac";
			inputt.disabled = true;
			divv.id = "fnac";
			divv.appendChild(labell);
			divv.appendChild(inputt);
			divd.appendChild(divv);
			foto.src = jsonobj.Empleados[i].foto;
		}
	}
	if (value == 1) {
		document.getElementById("detalle").innerHTML = "";
		document.getElementById("fotos").src = "./imagenes/foto.jpg";
	}
}