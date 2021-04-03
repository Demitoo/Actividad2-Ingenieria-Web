"use strict";
var formulario = document.getElementById("formulario");
var mensaje = document.getElementById("mensaje");
var nombre = formulario.elements[0];
var apellidos = formulario.elements[1];
var rut = formulario.elements[2];
var email = formulario.elements[3];
var telefono = formulario.elements[4];
var nivelProgra = formulario.elements[11];
var descripcion = formulario.elements[17];
formulario.addEventListener("submit", function (evento) {
    if (validarRadio() && validarCheckbox() && validarDatos()) {
        formulario.style.display = "none";
        mensaje.innerHTML = "hemos recibido sus datos, pronto nos estaremos comunicando con usted";
        mensaje.style.color = "#ff0000";
    }
    evento.preventDefault();
});
var expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    rut: /^[0-9]+-[0-9 k K]{1}$/,
    telefono: /^\d{9}$/,
    descripcion: /.{1,300}$/ // 1 a 300 caracteres numeros.
};
function validarRadio() {
    var x = formulario.elements.nivel;
    if (x.value != "") {
        return true;
    }
    else {
        alert("tiene que tener al menos un año de experiencia");
        return false;
    }
}
function validarCheckbox() {
    var valido = false;
    var py = document.getElementById("python");
    var jav = document.getElementById("java");
    var ts = document.getElementById("typescript");
    var php = document.getElementById("php");
    var csharp = document.getElementById("csharp");
    var cmas = document.getElementById("cmas");
    if (py.checked) {
        valido = true;
    }
    else if (jav.checked) {
        valido = true;
    }
    else if (ts.checked) {
        valido = true;
    }
    else if (php.checked) {
        valido = true;
    }
    else if (csharp.checked) {
        valido = true;
    }
    else if (cmas.checked) {
        valido = true;
    }
    if (valido) {
        console.log("checkbox validado");
    }
    else {
        alert("Tiene que seleccionar al menos 1 lenguaje");
    }
    return valido;
}
function validarDatos() {
    if (expresiones.nombre.test(nombre.value) && expresiones.apellidos.test(apellidos.value) && expresiones.rut.test(rut.value)
        && expresiones.email.test(email.value) && expresiones.telefono.test(telefono.value) && expresiones.descripcion.test(descripcion.value)) {
        console.log("datos validados");
        return true;
    }
    else {
        if (expresiones.nombre.test(nombre.value) == false) {
            alert("el nombre debe tener caracteres permitidos");
        }
        if (expresiones.apellidos.test(apellidos.value) == false) {
            alert("los apellidos deben tener caracteres permitidos");
        }
        if (expresiones.rut.test(rut.value) == false) {
            alert("El rut no debe llevar puntos y incluir el guion con el digito verificador");
        }
        if (expresiones.email.test(email.value) == false) {
            alert("Ingrese el email correctamente");
        }
        if (expresiones.telefono.test(telefono.value) == false) {
            alert("El telefono debe tener 9 digitos");
        }
        if (expresiones.descripcion.test(descripcion.value) == false) {
            alert("La descripcion es obligatoria, y debe tener como maximo 300 caracteres!");
        }
        return false;
    }
}
function limpiarDatos() {
    formulario.reset();
}
