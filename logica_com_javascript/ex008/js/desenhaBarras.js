
function desenhaBarras(x,y,serie2015,cores){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');   

    pincel.fillStyle = cores;
    pincel.fillRect(x,y,50,serie2015);

}

desenhaBarras(0,0,50,'blue');
desenhaBarras(0,50,25,'green');
desenhaBarras(0,75,20,'yellow');
desenhaBarras(0,95,5,'red');


desenhaBarras(100,0,65,'blue');
desenhaBarras(100,65,20,'green');
desenhaBarras(100,85,13,'yellow');
desenhaBarras(100,98,2,'red');


