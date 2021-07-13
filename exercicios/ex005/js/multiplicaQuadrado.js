function desenhaQuadradoVerde(x,y,cor){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = cor;
    pincel.fillRect(x,y,50,50);
    pincel.strokeStyle = 'black';
    pincel.strokeRect(x,y,50,50);
}

var x = 0;
while(x<600){
    desenhaQuadradoVerde(x,0,'green');
    desenhaQuadradoVerde(x,50,'red');
    desenhaQuadradoVerde(x,100,'yellow');
    desenhaQuadradoVerde(x,150,'blue');
    x = x+50;
}