

//desordenamos las placas del puzle
function desordenar() {
    piezas = piezas.sort(function () { return Math.random() - 0.5 });
    refrescarPuzle();
}

//refrezcamos el puzle para que aparezca desordenado
function refrescarPuzle() {
    for (var casilla = 0; casilla < 12; casilla++) {
        var imagen = piezas[casilla];
        var colocar = document.getElementById("img_" + casilla);
        colocar.src = "img/tigre-" + imagen + ".jpg";
    }
}

//desmarcamos todas, les quitamos el marco rojo
function desmarcarTodas() {
    for (var i = 0; i < 12; i++) {
        var img = document.getElementById("img_" + i);
        if (img) {
            img.style.border = "none";
        }
    }
}

function seleccionar(casilla) {
    num_click = num_click + 1;

    if (num_click == 1) {

        casilla_click_primero = casilla;
        desmarcarTodas();
        var casillaSeleccionada = document.getElementById("img_" + casilla);
        casillaSeleccionada.style.border = "3px solid red";
    }

    if (num_click == 2) {
        var casilla_click_segundo = casilla;
        var contenido = piezas[casilla_click_primero];

        piezas[casilla_click_primero] = piezas[casilla_click_segundo];
        piezas[casilla_click_segundo] = contenido;

        num_click = 0;

        desmarcarTodas();
        refrescarPuzle();


    }
    var correcto = comprobarPuzleFinalizado();

    if (correcto == true) {
        alert("Puzle Finalizado");
    }
}

function comprobarPuzleFinalizado() {
    console.log(piezas);
    var correcto = true;
    for (var i = 0; i < 12; i++) {
        if (piezas[i] != i) {
            correcto = false;
        }
    }
    return correcto;
}

// Aqui empieza el programa

var piezas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var num_click = 0;
var casilla_click_primero;

desordenar();






