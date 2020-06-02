var numero = 0;

function añadir() {
    if (numero < 9) {
        numero++;
        const padre = document.getElementById('lista');
        var nuevo = document.createElement('li');
        var campo = document.createElement('input');
        campo.type = 'text';
        padre.appendChild(nuevo).appendChild(campo);
        var siguiente = formulario.getElementByTagName('input')[numero];
        formulario.insertBefore(campo, siguiente);
    }
}

function borrar() {
    if (numero > 0) {
        const padre = document.getElementById('lista');
        padre.removeChild(padre.lastChild);
        numero--;
    }
}