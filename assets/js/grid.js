var canvas = document.getElementById('map');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var tableau = [];

function Tile(sx,sy,swidth,sheight,dx,dy,dwidth,dheight) {
    var img = new Image();
    img.src ='../assets/pictures/world/grass.png';
    this.sx = sx;
    this.sy = sy;
    this.swidth = swidth;
    this.sheight = sheight;
    this.dx = dx;
    this.dy = dy;
    this.dwidth = dwidth;
    this.dheight = dheight;
    
    this.draw = function() {
        img.onload = function() {
            ctx.drawImage(img,sx,sy,swidth,sheight,dx,dy,dwidth,dheight);
        };
    };

}

/**CREATION DU PLATEAU DE JEU */
function Floor(sx,sy,swidth,sheight,dx,dy,dwidth,dheight){
    this.sx = sx;
    this.sy = sy;
    this.swidth = swidth;
    this.sheight = sheight;
    this.dx = dx;
    this.dy = dy;
    this.dwidth = dwidth;
    this.dheight = dheight;
    this.draw = function() {
        
        for (var i=0;i<15;i++) {
            var decalX = 46;
            var decalY = 23;
            for (var j=0;j<10;j++) {
                var tile = new Tile(sx,sy,swidth,sheight,dx,dy,dwidth,dheight);
                tile.draw();            
                dx += 44;
                dy += 22
            };
            dx = 800 - (decalX * i);
            dy = 100 + (decalY * i);
        };
    };
}