var canvas = document.getElementById('pnj');
var ctx = canvas.getContext('2d');


function Pnj(oX,oY,oWidth,oHeight,x,y,width,height) {
    this.x = x;
    this.y = y;
    this.oX = oX;
    this.oY = oY;
    this.oWidth = oWidth;
    this.oHeight = oHeight;
    this.width = width;
    this.height = height;
    this.draw = function() {
        var img = new Image();
        img.src = '../assets/pictures/pnj/monster.png';
        img.onload = function() {    
            ctx.drawImage(img,0,0,512,512,200,200,32,32);
        }

    };
}

