var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2*3.14);
        pincel.fill();
    }
    
    desenhaCirculo(300,200,10,'red');
    desenhaCirculo(320,200,10,'black');
    desenhaCirculo(280,200,10,'orange');
    desenhaCirculo(300,220,10,'blue');
    desenhaCirculo(300,180,10,'yellow');