var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio,cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);

}
var x = 11;

//Minha lógica
var definir = 0;

    function atualizaTela(){
        
        if(x==590 | x==10){
            definir++;
        }        
        limpaTela();
        desenhaCirculo(x, 20, 10,'green');

        if(definir % 2==0 ){
            x++;
        }else{
            x--;
        }
        
    }

    setInterval(atualizaTela,5);


//Lógica do professor
/*
var sentido = 1;

function atualizaTela() {

    limpaTela();

    if( x > 600) {
        sentido = -1;
    } else if (x < 0) {
        sentido = 1;
    } 

    desenhaCirculo(x, 20, 10);
    x = x + sentido;
}
*/
