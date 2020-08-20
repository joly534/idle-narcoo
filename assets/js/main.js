

var popul = document.getElementById('nombre-de-personne');
var nbrBucheron = document.getElementById('nbr-bucheron');
var quantBois = document.getElementById('nombre-de-bois');

/** LA POPULATION AUGMENTE TOUTES LES 30 SECONDES */
function Population() {
    setInterval(function() {
        valeurPopulation +=1;
        popul.innerHTML = valeurPopulation;
    }, 30000)
}




/**BOUTON D'OUVERTURE DU MENU */
function openMenu() {
    var ctrlPanel = document.getElementById('control-panel');
    var btnOpenMenu = document.getElementById('button-menu');
    var btnCloseMenu = document.getElementById('close-menu');
    /**LE VOLET APPARAIT */
    ctrlPanel.style.left= 0 +'px';
    /**LES BOUTONS CHANGENT */
    btnOpenMenu.style.display='none';
    btnCloseMenu.style.display='inline';
} 
/**BOUTON DE FERMETURE DU MENU */
function closeMenu() {
    var ctrlPanel = document.getElementById('control-panel');
    var btnOpenMenu = document.getElementById('button-menu');
    var btnCloseMenu = document.getElementById('close-menu');
    /**LE VOLET SE RETRACTE */
    ctrlPanel.style.left= '-' + 550 +'px';
    /**LES BOUTONS CHANGENT */
    btnOpenMenu.style.display='inline';
    btnCloseMenu.style.display='none';
} 


function main() {
    var ambiant = new Audio('../assets/sound/Mer-KA-Ba.mp3');
    ambiant.play();
    popul.innerHTML = valeurPopulation;
    Population();
    var grid = new Grid(1024,0,500,500,200,200,125,125);
    grid.draw();
    var monster = new Pnj(0,0,512,512,300,300,125,125);
    monster.draw()
}
main();