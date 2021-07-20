
function desenhaBarras(x,y,series,cores){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');   

    pincel.fillStyle = cores;
    pincel.fillRect(x,y,50,series);

}
function desenhaTexto(x,y,texto){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.font = '15px Georgia';
    pincel.fillStyle = 'black';
    pincel.fillText(texto,x,y);
}
    desenhaTexto(10,20,'2015');
    desenhaBarras(0,40,50,'blue');
    desenhaBarras(0,90,25,'green');
    desenhaBarras(0,115,20,'yellow');
    desenhaBarras(0,135,5,'red');

    desenhaTexto(110,20,'2016');
    desenhaBarras(100,40,65,'blue');
    desenhaBarras(100,105,20,'green');
    desenhaBarras(100,125,13,'yellow');
    desenhaBarras(100,138,2,'red');

/* Código do professor */
/*
function desenhaRetangulo(x, y, largura, altura, cor) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle=cor;
    pincel.fillRect(x,y, largura, altura);
    pincel.strokeStyle='black';
    pincel.strokeRect(x,y, largura, altura);
}

function desenhaTexto(x , y, texto) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.font='15px Georgia';
    pincel.fillStyle='black';
    pincel.fillText(texto, x, y);    
}

function desenhaBarra(x, y, serie, cores, texto) {

    desenhaTexto(x, y - 10, texto);

    var somaAltura = 0;
    for (var i = 0; i < serie.length; i++) {
        var altura = serie[i];
        desenhaRetangulo(x, y + somaAltura, 50, altura, cores[i]);
        somaAltura = somaAltura + altura;
    }
}

var cores = ['blue','green','yellow', 'red'];
var serie2015 = [50,25,20,5];
var serie2016 = [65,20,13,2];

desenhaBarra(50, 50, serie2015, cores, '2015');
desenhaBarra(150, 50, serie2016, cores, '2016');

*/