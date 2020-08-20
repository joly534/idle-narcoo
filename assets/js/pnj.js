var valeurDeProgression = 0;
var valeurBois = 0;
var valeurBucheron = 0;
var valeurPopulation = 2;


valeurBois= 0;

function Bucheron(img,oX,oY,oWidth,oHeight,x,y,width,height) {
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
        img.src = '';
        ctx.drawImage(img,oX,oY,oWidth,oHeight,x,y,width,height);
    }
    this.coupe = function() {
        valeurDeProgression = 0;
        var scie = new Audio('../assets/sound/scie.wav');
        scie.play();
        /**INCREMENTATION DES VALEURS DE PROGRESSION ET DE BOIS A INTERVALE REGULIER */
        setInterval (function() {
            var progBuche = document.getElementById('progression-bucheron');
            valeurDeProgression += 0.5; 
            valeurBois += 0.5;
            /* LA LARGEUR DE LA DIV AUGMENTE EN FONCTION DE LA VALEUR DE PROGRESSION DE*/
            progBuche.style.width=valeurDeProgression + "%";
            /** SI LA VALEUR DE PROGRESSION ARRIVE A 100 ON REMET A ZERO */
            if (valeurDeProgression>= 100) {
                valeurDeProgression =0;
                quantBois.innerHTML = valeurBois;
            }
            progBuche.innerHTML ="";
            progBuche.innerHTML = valeurDeProgression + '%';
        },150);
    }
}



/**EMBAUCHER UN BUCHERON */
function embaucherBucheron() {
    var img = new Image ();
    img.src='assets/pictures/pnj/sprite_wood_cutter.png';
    if (valeurPopulation > 0) {
        var buck = new Bucheron(img,0,0,160,160,400,400,32,32);
        buck.zIndex = 99999;
        valeurBucheron +=1;
        nbrBucheron.innerHTML= valeurBucheron;
        valeurPopulation = valeurPopulation-1;
        popul.innerHTML = valeurPopulation;
        buck.draw();
        buck.coupe();
    }
    else {
        console.log('pas possible');
    };
}