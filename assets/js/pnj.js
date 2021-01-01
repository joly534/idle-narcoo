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
    }, 30000)}
/*************************************************/



function Bucheron(dx,dy,dwidth,dheight) {
    var image = new Image();
    image.src = '../assets/pictures/pnj/monster.png';
    this.dx = dx;
    this.dy = dy;
    this.dwidth = dwidth;
    this.dheight = dheight;
    this.draw = function() {
        image.onload = function() {
            ctx.drawImage(image,0,0,64,64,dx,dy,dwidth,dheight);
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
    };
}



/**EMBAUCHER UN BUCHERON */
function embaucherBucheron() {
    if (valeurPopulation > 0) {
        valeurBucheron +=1;
        nbrBucheron.innerHTML= valeurBucheron;
        valeurPopulation = valeurPopulation-1;
        popul.innerHTML = valeurPopulation;
    }
    else {
        console.log('pas possible');
    };
}