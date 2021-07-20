    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    /*cabeça*/
    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(125,50,350,300);

    /*olho esquerdo*/
    pincel.fillStyle = 'black';
    pincel.fillRect(175,110,90,90);

    /*olho direito*/
    pincel.fillStyle = 'black';
    pincel.fillRect(335,110,90,90);

    /*nariz*/
    pincel.fillStyle = 'black';
    pincel.fillRect(265,200,70,100);

    /*boca 1*/
    pincel.fillStyle = 'black';
    pincel.fillRect(225,240,40,110);

    /*boca 2*/
    pincel.fillStyle = 'black';
    pincel.fillRect(335,240,40,110);

    /*Código do professor*/
    /*var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    // cabeça
    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(200,50,350,300);

    // olhos
    pincel.fillStyle = 'black';
    pincel.fillRect(250, 110, 90, 90);
    pincel.fillRect(410, 110, 90, 90);

    // nariz
    pincel.fillRect(340, 200, 70, 100);

    // boca ou barba
    pincel.fillRect(300, 240, 40, 110);
    pincel.fillRect(410, 240, 40, 110);*/