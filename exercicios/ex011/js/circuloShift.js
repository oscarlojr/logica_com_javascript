var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);
var raio = 10;


function desenhaCirculo(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    
    pincel.fillStyle = 'blue';

        
        
        if(evento.shiftKey==true & raio<=40){
            raio = raio + 10;
        }
       else if(evento.altKey==true & raio>=10){
            raio = raio - 5;
        }
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * 3.14);
        pincel.fill();
        console.log(x + ',' + y);
}


tela.onclick = desenhaCirculo;


/* Código do professor*/
/* 
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;

function desenhaCirculo(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    console.log(x + ',' + y);

    if (evento.shiftKey && evento.altKey) {

        alert('Só aperte uma tecla por vez, por favor!');

    } else if(evento.shiftKey && raio + 10 <= 40) {
        raio = raio + 10;

    } else if(evento.altKey && raio - 5 >= 10) {
        raio = raio - 5;

    }

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();

}

tela.onclick = desenhaCirculo;
*/