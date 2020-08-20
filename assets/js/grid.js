var canvas = document.getElementById('map');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ensemble = [];


function Tuile(ox,oy,owidth,oheight,x,y,width,height) {
    var image = new Image();
    image.src = '../assets/pictures/world/grass.png';
    this.x = x;
    this.y = y;
    this.draw = function() {
        image.onload = function() {
            ctx.drawImage(image,ox,oy,owidth,oheight,x,y,width,height);
        }
    }

}
/**CRERATION DE LA GRILLE */
function Grid(ox,oy,owidth,oheight,x,y,width,height){
     
}