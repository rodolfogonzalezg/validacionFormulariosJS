var formulario = document.getElementById("miFormulario");
window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validaNombre() {
    var elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if (elemento.value == "") {
        alert("El campo nombre no puede estar vacio");
        error(elemento);
        return false;
    }
    return true;
}

function validaTelefono() {
    var elemento = document.getElementById("telefono");
    alert("Es el telefono un numero" + isNaN(elemento.value));
    if (isNaN(elemento.value)) {
        alert("El campo télefono debe ser numerico:");
        return false;
    }
    return true;
}

function validaFechaNac() {
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var anio = document.getElementById("anio").value;
    var fecha = new Date(anio, mes, dia);
    if (isNaN(fecha)) {
        alert("Los datos de la fecha son incorrectos");
        return false;
    }
    return true;
}

function validaMayor() {
    var mayor = document.getElementById("mayor");
    if (!mayor.checked) {
        alert("Debe ser mayor de 18 años");
        return false;
    }
    return true;
}

function validar(e) {
    if (validaNombre() && validaTelefono() && validaFechaNac() && validaMayor() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className = "";
}