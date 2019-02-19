var request = false;
var txt = "";
var cont = 0;
var resumenpe = new Array();
var pedidoc = new Array();

function HolaSoyElFooter() {
	var foot = "Creado por: @NubFragger - Version Navegador: " + navigator.appVersion + " Ancho y alto de pantalla:  " + screen.width + " x " + screen.height + " píxeles";
	document.getElementById("footp").innerHTML = foot;
}

if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else if (window.ActiveXObject) {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
function obtenerdatosjson() {
	request.open('GET', "./json/menu.json");
	request.onreadystatechange = respuesta;
	request.send(null);
}
function respuesta() {
	if (request.readyState == 4 && request.status == 200) {
		var jsonobj = JSON.parse(request.responseText);
		for (var i in jsonobj.Menus) {
			var option = document.createElement('option');
			option.value = jsonobj.Menus[i].Nombre;
			option.innerHTML = jsonobj.Menus[i].Nombre;
			document.getElementById("selecmenu").appendChild(option);
		}
	}
}
function change(value) {
	var opc = document.getElementById("selecmenu2");
	jsonobj = JSON.parse(request.responseText);
	document.getElementById("selecmenu2").innerHTML = "<option value=\"1\">Selecciona:</option>";
	for (var j in jsonobj.Menus) {
		if (value == jsonobj.Menus[j].Nombre) {
			for (var i in jsonobj.Menus[j].Opciones) {
				var option = document.createElement('option');
				option.value = jsonobj.Menus[j].Opciones[i];
				option.innerHTML = jsonobj.Menus[j].Opciones[i];
				opc.appendChild(option);
			}
		}
	}
}
function introdatospedido() {
	pedidoc[0] = document.getElementById("cliente").value;
	pedidoc[1] = document.getElementById("tel").value;
	pedidoc[2] = document.getElementById("fecha_ped").value;
	var fpago = document.getElementById("forpago");
	pedidoc[3] = fpago.options[fpago.value].text;
	var selmenu = document.getElementById("selecmenu");
	pedidoc[4] = selmenu.options[selmenu.selectedIndex].text;
	var selopt = document.getElementById("selecmenu2");
	pedidoc[5] = selopt.options[selopt.selectedIndex].text;

	resumenpe[0] = pedidoc;
}
function resumenped() {
	var tabla;
	tabla = "<table class=\"table table-dark\">";
	for (var i = 0; i < pedidoc.length; i++) {
		tabla += "<tr>";
		if (i == 0) {
			tabla += "<th>Cliente:</th>";
		} else if (i == 1) {
			tabla += "<th>Telefono:</th>";
		} else if (i == 2) {
			tabla += "<th>Fecha pedido:</th>";
		} else if (i == 3) {
			tabla += "<th>Forma de Pago:</th>";
		} else if (i == 4) {
			tabla += "<th>Menu:</th>";
		} else if (i == 5) {
			tabla += "<th>Opción:</th>";
		}
		tabla += "<td class=\"border-0 border-secondary\">" + resumenpe[0][i] + "</td>";
		tabla += "</tr>";
	}
	tabla += "</table>";
	tabla += "<div class=\"text-center\">";
	tabla += "<input type=\"button\" value=\"Realizar Pedido\" class=\"btn btn-outline-success\" onclick=\"myFunction(), addcookie(), activarbtn()\">";
	tabla += "</div>";
	document.getElementById("resumen").innerHTML = tabla;
}
function activarbtn() {
	document.getElementById("VPA").style.display = "inline";
	document.getElementById("EPA").style.display = "inline";
}
function myFunction() {
	var x = document.getElementById("snackbar");
	x.className = "show";
	setTimeout(function () {
		x.className = x.className.replace("show", "");
	}, 3000);
}
function addcookie() {
	var cliente = document.getElementById('cliente').value;
	var tel = document.getElementById('tel').value;
	var fecha_ped = document.getElementById('fecha_ped').value;
	var forpago = document.getElementById('forpago').value;
	var menu = document.getElementById('selecmenu').value;
	var opmenu = document.getElementById('selecmenu2').value;
	var fhoy = new Date();
	fhoy.setTime(fhoy.getTime() + (302460601000));
	var expires = "expires=" + fhoy.toUTCString();
	document.cookie = "Cliente=" + cliente + ";" + expires + ";path=/";
	document.cookie = "Telefono=" + tel + ";" + expires + ";path=/";
	document.cookie = "Fecha del pedido=" + fecha_ped + ";" + expires + ";path=/";
	document.cookie = "Forma de pago=" + forpago + ";" + expires + ";path=/";
	document.cookie = "Menu=" + menu + ";" + expires + ";path=/";
	document.cookie = "Opcion menu=" + opmenu + ";" + expires + ";path=/";
}
function seecookie() {
	var cookie = document.cookie;
	var texto = "";
	if (cookie == "") {
		texto = "No hay pedido antiguo";
		alert(texto);
	} else {
		texto = "Ultimo pedido realizado:\n";
		for (var i = 0; i < cookie.length; i++) {
			if (cookie[i] == ";") {
				texto += "\n";
			} else {
				texto += cookie[i];
			}
		}
		alert(texto);
	}

}
function delecookie() {
	document.cookie = "Cliente=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	document.cookie = "Telefono=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	document.cookie = "Fecha del pedido=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	document.cookie = "Forma de pago=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	document.cookie = "Menu=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	document.cookie = "Opcion menu=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	document.getElementById("resumen").innerHTML = "";
}
function validarall() {
	var clienteval = valcliente();
	var telval = valtel();
	var valselefpago = document.getElementById("forpago").value;
	var valselemenu = document.getElementById("selecmenu").value;
	var valseleopciones = document.getElementById("selecmenu2").value;
	if(clienteval){
		document.getElementById("VR").disabled = false;
		document.getElementById("cliente").style.border = "";
	}else{
		document.getElementById("VR").disabled = true;
		document.getElementById("cliente").style.border = "2px solid red";
	}
	if(telval){
		document.getElementById("VR").disabled = false;
		document.getElementById("tel").style.border = "";
	}else{
		document.getElementById("VR").disabled = true;
		document.getElementById("tel").style.border = "2px solid red";
	}
	if(valselefpago!=1){
		document.getElementById("VR").disabled = false;		
		document.getElementById("forpago").style.border = "";
	}else{
		document.getElementById("VR").disabled = true;
		document.getElementById("forpago").style.border = "2px solid red";
	}
	if(valselemenu!=1){
		document.getElementById("VR").disabled = false;		
		document.getElementById("selecmenu").style.border = "";
	}else{
		document.getElementById("VR").disabled = true;
		document.getElementById("selecmenu").style.border = "2px solid red";
	}
	if(valseleopciones!=1){
		document.getElementById("VR").disabled = false;		
		document.getElementById("selecmenu2").style.border = "";
	}else{
		document.getElementById("VR").disabled = true;
		document.getElementById("selecmenu2").style.border = "2px solid red";
	}
}
function valcliente() {
	var letras = document.getElementById("cliente").value;
	var expreg = /(?=.*[A-Za-z])/;
	if (expreg.test(letras)) {
		return true;
	} else {
		return false;
	}
}
function valtel() {
	var telefono = document.getElementById("tel").value;
	var expreg = /(?=.*\d)/;
	if (expreg.test(telefono)) {
		return true;
	} else {
		return false;
	}
}
function habletras(evento) {
	var teclanum = evento.keyCode;
	if (teclanum >= 65 && teclanum <= 90) {
		return true;
	} else if (teclanum == 32 || teclanum == 8 || teclanum == 9) {
		return true;
	} else {
		return false;
	}
}
function habnum(evento) {
	var teclanum = evento.keyCode;
	if (teclanum >= 96 && teclanum <= 105 || teclanum >= 48 && teclanum <= 57) {
		return true;
	} else if (teclanum == 32 || teclanum == 8 || teclanum == 9) {
		return true;
	} else {
		return false;
	}
}