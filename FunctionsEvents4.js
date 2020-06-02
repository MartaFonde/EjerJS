function opcion(evento) {
    if (evento.key == "a" || evento.key == "A") {
        var n1 = prompt("Introduce un número");
        var n2 = prompt("Introduce otro número");
        alert("SUMA= " + (parseInt(n1) + parseInt(n2)));

    } else if (evento.key == "b" || evento.key == "B") {
        document.body.style.backgroundColor = '#E63244';

    } else if (evento.key == "c" || evento.key == "C") {
        window.open("https://www.youtube.com/watch?v=QntzrkkFWV0&list=RDQntzrkkFWV0&start_radio=1");
    } else {
        alert("Yo no entender");
    }
}

function inicio() {
    window.onkeydown = opcion;
}

window.onload = inicio;