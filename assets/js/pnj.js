var valeurDeProgression = 0;
var valeurBois = 0;
var valeurBucheron = 0;
var valeurPopulation = 2;




var popul = document.getElementById('nombre-de-personne');
var nbrBucheron = document.getElementById('nbr-bucheron');
var quantBois = document.getElementById('nombre-de-bois');

/** LA POPULATION AUGMENTE TOUTES LES 30 SECONDES */
function Population() 
{    
    popul.innerHTML = valeurPopulation;
    setInterval(function() 
    {
        valeurPopulation +=1;
        popul.innerHTML = valeurPopulation;

    }, 30000)
}


function Bucheron(sx,sy,swidth,sheight,dx,dy,dwidth,dheight) {
    var image = new Image();
    image.src = '../assets/pictures/pnj/monster.png';
    this.sx = sx;
    this.sy = sy;
    this.swidth = swidth;
    this.sheight = sheight;
    this.dx = dx;
    this.dy = dy;
    this.dwidth = dwidth;
    this.dheight = dheight;
    this.draw = function() {
        image.onload = function() {
            ctx.drawImage(image,sx,sy,swidth,sheight,dx,dy,dwidth,dheight);
        };
    };

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