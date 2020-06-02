//ejer1
function indices(zoo) {
    for (var i = 0; i < zoo.length; i++) {
        for (var j = 0; j < zoo[i].length; j++) {
            if ((i + j) % 2 == 0) {
                document.write(zoo[i][j] + "<br>");
            }
        }
    }
}

//ejer 2
function sumaNumeros(num) {
    var suma = 0;
    for (var i = 0; i < num.length; i++) {
        for (var j = 0; j < num[i].length; j++) {
            if (num[i][j] > num[i][0]) {
                suma += num[i][j];
            }
        }
    }
    document.write(suma);
}

//ejer3
function tabla(nombres, materias) {
    document.write('<table border="1px solid">');
    document.write("<tr>");
    document.write("<th>" + "</th>");
    for (var i = 0; i < materias.length; i++) {
        document.write("<th>" + materias[i] + "</th>");
    }
    document.write("</tr>");
    for (var y = 0; y < nombres.length; y++) {
        document.write("<tr>");
        document.write("<th>" + nombres[y] + "</th>"); //th porque es cabecera
        for (var x = 0; x < materias.length; x++) {
            document.write("<td>" + parseInt(Math.random() * 11) + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

/*
function htmlTabla(cabSup, cabIzq, datos){
    var html = '<table border="1px solid">';
    html+='<tr>';
    html+='<th></th>';
    for(var i=0; i<cabSub.length; i++){
        html+='<th>'+cabSub[i]+'</th>';
    }
    html+='</tr>';
}
*/

function numAleatorios() { //no la usamos
    num = parseInt(Math.random() * 11);
    return num;
    //Podriamos crear una matriz de datos y pasarsela como parámetro a tabla
    //var num = new Array(new Array());
    //num[x][y] = numAleatorios();
    //num[x][y] = parseInt(Math.random() * 11);
}

//ejer4
function recorreMatriz(matriz) {
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] >= 'A' && matriz[i][j] <= 'z') {
                matriz[i][j] = 0;
            }
        }
    }
    document.write("<table>");
    for (var i = 0; i < matriz.length; i++) {
        document.write("<tr>");
        for (var j = 0; j < matriz[i].length; j++) {
            document.write("<td>" + matriz[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");

}