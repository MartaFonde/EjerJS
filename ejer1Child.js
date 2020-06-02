function borrar() {
    const padre = document.getElementById('padre').value;
    var hijo = parseInt(document.getElementById('hijo').value);
    padre.removeChild(padre.children[hijo - 1]);
}