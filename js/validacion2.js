window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validaNombre() {

    var elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) {
        error(elemento);
        return false;
    }
    return true;
}

function validaEdad() {
    var elemento = document.getElementById("edad");
    if (!elemento.checkValidity()) {
        error(elemento);
        return false;
    }
    return true;
}

function validaTelefono() {
    var elemento = document.getElementById("telefono");
    if (!elemento.checkValidity()) {
        error(elemento);
        return false;
    }
    return true;
}

function error(elemento) {
    document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento) {
    var formulario = document.forms[0];
    for (var i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}

function validar(e) {
    limpiarError();
    if (validaNombre() && validaEdad() && validaTelefono() && confirm("Desea eviar el formulario?")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}