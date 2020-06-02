function parImpar(num) {
    if (num % 2 == 0) {
        window.alert("El número es par");
    } else {
        window.alert("El número es impar");
    }
}

function multiplo(n1, n2) {
    if (n1 % n2 == 0) {
        return n1 + " es múltiplo de " + n2;
    } else if (n2 % n1 == 0) {
        return n2 + " es múltiplo de " + n1;
    } else {
        return "No son múltiplos";
    }
}

function precio(edad) {
    if (edad <= 8 || edad >= 66) {
        return "Gratis";
    } else if (edad <= 16 || edad >= 56) {
        return 5;
    } else if (edad <= 25) {
        return 8;
    } else {
        return 10;
    }
}
/*
function precio(edad){
    switch (true) {
    case (edad <= 8 || edad >= 66):
        return 0;
    case ((edad <= 16) || (edad >= 56):
        return 5;
    case (edad <= 25):
        return 8;
    default:
        return 10;
    }
}
si ponemos switch(edad) va al default. No reconoce edad con condiciones, 
hace falta poner true!!
*/

function autobus(animal) {
    switch (animal) {
        case "huron":
        case "gato":
            /*comillas porque es un valor*/
            return 1;
        case "perro":
            return 1.5;
        case "loro":
            return 2;
        default:
            return "animal no permitido";
    }
}

function bingo(edad) {
    if (edad < 75 || edad > 80) {
        return "No puedes jugar. A la mierda."
    } else {
        return edad * 0.05;
    }
}

function factorial(n) {
    var factorial = 1;
    if (n == 0) {
        return 1;
    } else {
        for (i = n; i >= 1; i--) {
            factorial = i * factorial;
        }
        /*else {
            return n * factorial(n-1);
        }*/
    }
    return factorial;
}

function suma(n) {
    var sumaNum = parseInt(0);
    var num = parseInt(0);
    for (i = n; i > 0; i--) {
        num = parseInt(prompt("Introduce un número"));
        sumaNum = num + sumaNum;
    }
    return sumaNum;
}

function fibonacci() {
    var numAnt = parseInt(1);
    var num = parseInt(0);
    while (num <= 10000) {
        document.write(num); //0    1   2
        num = num + numAnt; //0+1   1+1   
        numAnt = num; //1   2
        //n = sucesion; 
    }
}