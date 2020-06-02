function espacios(cadena) {
    if (cadena.length == 0) {
        return "No has escrito nada";
    } else {
        return "Escrito";
    }
}

/*function muestraLetra(cadena) {
    for (i = 0; i < cadena.length; i++) {
        return cadena.substr(i);
    }
}*/

function vecesLetra(cadena, letra) {
    //pasar todo a mayus o a minus
    var num = 0;
    for (var i = 0; i < cadena.length; i++) {
        if (cadena.charAt(i) == letra || cadena.charAt(i) == letra.toUpperCase()) {
            num++;
        }
    }
    return num;
}

function longitudPalabra(palabra1, palabra2) {
    if (palabra1.length > palabra2.length) {
        return "La palabra más larga es " + palabra1 + " y tiene " + palabra1.length + " letras."
    } else if (palabra2.length > palabra1.length) {
        return "La palabra más larga es " + palabra2 + " y tiene " + palabra2.length + " letras."
    } else {
        return "Las dos palabras son igual de largas con " + palabra1.length + " letras."
    }
}

function revesPalabra(palabra) {
    var revesPalabra = "";
    for (var i = palabra.length + 1; i >= 0; i--) {
        revesPalabra += palabra.charAt(i);
    }
    return revesPalabra;
}

function vocalesPalabra(palabra) {
    var num = 0;
    palabra = palabra.toLowerCase();
    for (var i = 0; i < palabra.length; i++) {
        if (palabra.charAt(i) == 'a' || palabra.charAt(i) == 'e' || palabra.charAt(i) == 'o' || palabra.charAt(i) == 'u' || palabra.charAt(i) == 'i') {
            num++;
        }
        /*if("aeiouáéíóú".indexOf(palabra.charAt(i))!=-1) devuelve -1 cuando no existen vocales*/
    }
    return num;
}

function palabraRecortada(palabra, posicion) {
    var nuevaPalabra = "";
    if (palabra.length < posicion) {
        window.alert("Error");
    }
    for (var i = 0; i < palabra.length; i++) {
        if (i != posicion) {
            nuevaPalabra += palabra.charAt(i);
        }
    }
    return nuevaPalabra;
}
/*return cadena.substr(0, numero)+cadena.substr(numero+1);*/


function nombreAp(nombreApellido) {
    for (var i = 0; i < nombreApellido.length; i++) {
        if (nombreApellido = " ") {
            nombreApellido.charAt(i).toUpperCase() + ".";
        }
    }
    /*var nuevoNombre = (nombre.charAt(0)).toUpperCase() + nombre.substr(1);
    var nuevoApellido = (apellido.charAt(0)).toUpperCase() + ".";
    return nuevoNombre + " " + nuevoApellido;*/
}