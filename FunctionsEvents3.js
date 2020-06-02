var cont = 0;

function satan(evento) {
    if (evento.key == "6") {
        cont++;
    } else {
        cont = 0;
    }
    if (cont == 3) {
        alert("Soy el coronavirus, el apocalipsis ya está aquí");
    }
}

function iniciar() {
    window.onkeydown = satan;
}

window.onload = iniciar;