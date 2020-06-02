function iniciar1() {
    const titulo = document.getElementById("titulo");
    var parrafo = document.createElement("p");
    parrafo.textContent = "Página creada por ti";
    titulo.appendChild(parrafo);
}

function iniciar2() {
    const titulo = document.getElementById("lista");
    var pais = document.createElement("li");
    pais.textContent = document.getElementById('nombre').value;
    titulo.appendChild(pais);
}

var coleccionPaises = [];

function paises() {
    const lista = document.getElementById("lista");
    var elem = document.getElementById("nombre").value;
    elem = elem.toUpperCase();
    if (!(coleccionPaises.includes(elem))) {
        coleccionPaises.push(elem);
        var pais = document.createElement('li');
        pais.textContent = elem;
        lista.appendChild(pais);
    } else {
        alert("Error, país ya incluido");
    }
}