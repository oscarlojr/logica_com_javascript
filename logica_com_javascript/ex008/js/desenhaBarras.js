
function desenhaBarras(x,y,cores){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d')
    

    pincel.fillStyle = cores;
    pincel.fillRect(0,x,0,y)

}
desenhaBarras(50,50,'blue');
desenhaBarras(50,25,'green');
// //var cores = ['blue', 'green', 'yellow', 'red'];
// //var serie2015 = [50, 25, 20, 5];
// //var serie2016 = [65, 20, 13, 2];

