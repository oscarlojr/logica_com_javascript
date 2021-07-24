var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'white';
pincel.fillRect(0,0,600,400);
var raio = 10;
var xAleatorio;
var yAleatorio;
function desenhaCirculo(x,y,raio,cor){
    pincel.beginPath();
    pincel.fillStyle = cor;
    pincel.arc(x,y,raio,0,2*Math.PI);
    pincel.fill();
}

function limpaTela(){
    pincel.clearRect(0,0,600,400);
}

function desenhaAlvo(x,y){
    desenhaCirculo(x,y,raio+20,'red');
    desenhaCirculo(x,y,raio+10,'white');
    desenhaCirculo(x,y,raio,'red');
}

function sorteiaPosicao(maximo){
    return Math.floor(Math.random()*maximo);
}
function atualizaTela(){

    limpaTela();
    xAleatorio = sorteiaPosicao(600);
    yAleatorio = sorteiaPosicao(400);
    desenhaAlvo(xAleatorio,yAleatorio);
}

setInterval(atualizaTela,900);

var acertos = 0;
var tentativa;
function dispara(evento){
    
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    if((x>xAleatorio-raio)
        &&(x<xAleatorio+raio)
        &&(y>yAleatorio-raio)
        &&(y<yAleatorio+raio)){
            acertos++;
            alert('Acertou '+acertos);
    }   
    
    return tentativa = acertos;
   
}
console.log(tentativa);
/*
if(tentativa){

    document.write('Número de acertos = '+acertos);
}*/
tela.onclick = dispara;
