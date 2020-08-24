var canvas = document.getElementById('map');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var frameWorldX = [0,500,1000,1500,2000,2500];
var world = [];


function drawTile(sximg,dx,dy,dwidth,dheight) {
    var img = new Image();
    img.src = '../assets/pictures/world/grass.png';
    img.onload = function() {
        ctx.drawImage(img,sximg,0,500,500,dx,dy,dwidth,dheight);
    }
}

function drawFloor() {
    var dx = 700;
    var dy = 0;
    var dwidth = 208;
    var dheight = 120;
    var decalX = 76;
    var decalY = 22;
    /***dix lignes */
    for (var i=0 ; i<15 ; i++) {
        /**dix colonnes */
        for (var j=0 ; j<15; j++) {
            /**selection aleatoire de la coordonnée x dans spritsheet grass.png */
            var sximg = frameWorldX[Math.floor(Math.random()* 6)];
            drawTile(sximg,dx,dy,dwidth,dheight);
            dx += 76;
            dy += 22;
            world.push(j);    
        };
        dx = 700 - decalX * (i + 1);
        dy = 0 + decalY * (i+1)
    }
    var bucheron = new Bucheron(700,0,64,64);
    bucheron.draw();
}
