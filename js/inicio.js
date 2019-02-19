function mostrarmenu(id) {
    document.getElementById(id).style.visibility = "visible";
}
function ocultarmenu(id) {
    document.getElementById(id).style.visibility = "hidden";
    document.h3.innerHTML = "";
}
var request = false;
var txt = "";
var cont = 0;

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
function generarmenu1() {
    request.open('GET', "./json/menu.json");
    request.onreadystatechange = respuesta1;
    request.send(null);
}
function respuesta1() {
    if (request.readyState == 4 && request.status == 200) {
        var jsonobj = JSON.parse(request.responseText);

        var id = document.getElementById('m1').id;
        var titulo = document.getElementById('titulo1');
        var lista = document.getElementById('lista1');
        if (id == 'm1') {
            alert(jsonobj.Menus[0].Nombre);
            titulo.innerHTML = jsonobj.Menus[0].Nombre;
            if (lista.childNodes.length == 1) {
                for (var i in jsonobj.Menus[0].Opciones) {
                    var li = document.createElement('li');
                    li.value = i;
                    li.innerHTML = jsonobj.Menus[0].Opciones[i];
                    lista.appendChild(li);
                }
            }
        }
    }
}
function generarmenu2() {
    request.open('GET', "./json/menu.json");
    request.onreadystatechange = respuesta2;
    request.send(null);
}
function respuesta2() {
    if (request.readyState == 4 && request.status == 200) {
        var jsonobj = JSON.parse(request.responseText);

        var id = document.getElementById('m2').id;
        var titulo = document.getElementById('titulo2');
        var lista = document.getElementById('lista2');
        if (id == 'm2') {
            alert(jsonobj.Menus[3].Nombre);
            titulo.innerHTML = jsonobj.Menus[3].Nombre;
            if (lista.childNodes.length == 1) {
                for (var i in jsonobj.Menus[3].Opciones) {
                    var li = document.createElement('li');
                    li.value = i;
                    li.innerHTML = jsonobj.Menus[3].Opciones[i];
                    lista.appendChild(li);
                }
            }
        }
    }
}
function generarmenu3() {
    request.open('GET', "./json/menu.json");
    request.onreadystatechange = respuesta3;
    request.send(null);
}
function respuesta3() {
    if (request.readyState == 4 && request.status == 200) {
        var jsonobj = JSON.parse(request.responseText);

        var id = document.getElementById('m3').id;
        var titulo = document.getElementById('titulo3');
        var lista = document.getElementById('lista3');
        if (id == 'm3') {
            alert(jsonobj.Menus[4].Nombre);
            titulo3.innerHTML = jsonobj.Menus[4].Nombre;
            if (lista.childNodes.length == 1) {
                for (var i in jsonobj.Menus[4].Opciones) {
                    var li = document.createElement('li');
                    li.value = i;
                    li.innerHTML = jsonobj.Menus[4].Opciones[i];
                    lista.appendChild(li);
                }
            }
        }
    }
}