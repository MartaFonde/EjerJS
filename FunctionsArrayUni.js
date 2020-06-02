//ejer1
function orderDiasSemana(semana) {
    for (var i = 0; i < semana.length; i++) {
        document.write((i + 1) + ". " + semana[i] + "<br>");
    }
}

//ejer2
function mesesM(meses) {
    var mesesM = new Array(); // mesesM = []; sería lo mismo
    for (var i = 0; i < meses.length; i++) {
        if (meses[i][0] == 'm' || meses[i][0] == 'M') {
            mesesM.push(meses[i]);
            // mesesM.splice(mesesM.push(), 0, meses[i]);
            //
        }
    }
    document.write(mesesM);
    //for (var i = 0; i < mesesM.length; i++) {
    //  document.write(mesesM[i] + "<br>");
    //}
    //si no pide el bucle para mostrar el array lo podemos hacer con document.write
    //si queremos meter <br> o no queremos que muestre las comas, bucle
}

//ejer3
function colores(color) {
    for (var i = color.length; i >= 0; i--) {
        if (color[i] == 'azul') {
            color.splice(i, 1);
        }
    }
    //ó color.splice(color.indexOf("azul"), 1);  Si ponemos un color que no existe, va a devolver -1, borraría el último
    //['Raul', 'Iris', 'Dani']
    //  0         1       2
    //  -3       -2      -1
    // Lo arreglariamos diciendo que indexOf != -1  , ese es el valor crítico. Problema si hay dos azul

    for (var i = 0; i < color.length; i++) {
        document.write(color[i] + "<br>");
    }
}

//ejer4
function nombres(vectorNombres) {
    var numNombres = 3;
    for (var i = 0; i < numNombres; i++) {
        vectorNombres.push(prompt("Introduce un nombre: "));
        //var nombre=prompt("Introduce tal");
        //vectorNombres.splice(i, 0, nombre);
    }
    for (var i = 0; i < vectorNombres.length; i++) {
        document.write((i + 1) + " . " + vectorNombres[i] + "<br>");
    }
}

//ejer5
function arrayElementos(elementos) {
    var j = 0;
    var seguir = true;
    do {
        var elem = prompt("Introduce elemento");
        if (elem.toLowerCase() == "fin" || elementos.indexOf(elem) != -1) { //si elem está en el array, su índice es != -1 (aún no hemos introducido el elem pedido) 
            seguir = false;
        } else {
            elementos.splice(j, 0, elem);
            j++;
        }
    } while (seguir == true);

    //var cosas = new Array();
    //var cosa="";
    //var otra;
    //do{
    //otra=false;
    //cosa=prompt("Introduce");
    //if(cosas.indexOf(cosa) == -1 && cosa.toLoweCase() != "fin"){
    //cosas.push(cosa);
    //otra = true;
    //}
    //}while(otra);

    for (var i = 0; i < elementos.length; i++) {
        document.write(elementos[i] + "<br>");
    }
}

//ejer6
function numeros(arrayNum) {
    var positivos = 0;
    var negativos = 0;
    var cero = 0;
    var par = 0;
    for (var i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > 0) {
            positivos++;
        } else if (arrayNum[i] < 0) {
            negativos++;
        } else {
            cero++;
        }
        if (arrayNum[i] % 2 == 0) {
            par++;
        }
    }
    document.write("Positivos: " + positivos + "<br>" + "Negativos: " + negativos + "<br>" + "Ceros: " + cero + "<br>" + "Pares: " + par);
}

//ejer7
function num1al100(num) {
    var suma = 0;
    for (var i = 0; i < 100; i++) {
        num.splice(i, 0, i + 1); //num.push(i+1);
        suma += num[i]; //suma+=i
    }
    document.write("Suma: " + suma + "<br>");
    var media = suma / num.length;
    document.write("Media: " + media);
}

//ejer8
function numOrden(num) {
    var n = prompt("Introduce un número");
    if (num.length == 0) {
        num.push(n);
    } else {
        if (n >= num[num.length - 1]) {
            num.push(n);
        } else {
            for (var i = 0; i < num.length - 1; i++) {
                if (num[i] >= n) {
                    num.splice(i, 0, n); //nos funciona en todos los casos salvo la última posición
                }
                break;
            }
        }
    }
    document.write(num);
}

//ejer9
function inicialPalabras(palabras) {
    for (var i = palabras.length - 1; i >= 0; i--) {
        var palabra = palabras[i].toUpperCase();
        if (palabra[0] == "A") { //if('AaÁá'.indexOf(palabras[i][0])!=-1) si coincide no da -1
            palabras.splice(i, 1);
        }
    }
    document.write(palabras);
}

//ejer10    EXAMEN EN LA PARTE VALIDAR FORMULARIOS
function dni() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var dni = prompt("Introduce DNI");
    var num = dni.slice(0, 8);
    var letra = dni.charAt(8).toUpperCase();
    //document.write(dni + "<br>")
    //document.write("Longitud: " + dni.length + "<br>") //IMPORTANTE length non leva paréntesis!! é propiedade

    if (num < 0 || num > 99999999 || dni.length < 8 || dni.length > 9) {
        document.write("Número no válido"); //window.alert 
    } else {
        var resto = num % 23;
        if (letra == letras[resto]) {
            document.write("La letra indicada es correcta");
        } else {
            document.write("La letra no es correcta <br>");
            document.write("LETRA: " + letras[resto] + "<br>");
        }
    }
}