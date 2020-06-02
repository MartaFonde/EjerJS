function coord(evento) {
    //alert("Coordenada x: " + evento.pageX + " //  Coordenada Y: " + evento.pageY);
    document.getElementById("x").innerHTML = "Coordenada x: " + evento.pageX;
    document.getElementById("y").innerHTML = "Coordenada y: " + evento.pageY;
}

function iniciar() {
    //window.onclick=coord;
    window.onmousemove = coord;
}

window.onload = iniciar;