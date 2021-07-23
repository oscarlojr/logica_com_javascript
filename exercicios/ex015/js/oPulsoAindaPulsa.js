var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);
}

//Mimnha lógica
var x = 21;
var definir = 0;

function pulso(){
    if(x==20 | x==100){
        definir++;
    }
    limpaTela();
    desenhaCirculo(300,200,x,'green');
    if(definir %2==0){
        x++;
    }else{
        x--;
    }
}


setInterval(pulso,10);

//Lógica do professor
/*
var raio = 19;

var fatorCrescimento = 0;

function atualizaTela() {

    // limpamos sempre a tela para podermos desenhar um novo círculo
    limpaTela();

    if(raio > 30) {
        // o raio tem que diminuir
        fatorCrescimento = -1;
    } else if (raio < 20) {
        // o raio tem que aumentar
        fatorCrescimento = 1;
    }

    raio = raio + fatorCrescimento;
}
*/