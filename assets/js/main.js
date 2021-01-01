

/**BOUTON D'OUVERTURE DU MENU */
function openMenu() 
{
    /**on recupere les éléments */
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
function closeMenu() 
{
    /**on recupere les éléments */
    var ctrlPanel = document.getElementById('control-panel');
    var btnOpenMenu = document.getElementById('button-menu');
    var btnCloseMenu = document.getElementById('close-menu');
    /**LE VOLET SE RETRACTE */
    ctrlPanel.style.left= '-' + 550 +'px';
    /**LES BOUTONS CHANGENT */
    btnOpenMenu.style.display='inline';
    btnCloseMenu.style.display='none';
} 


function main() 
{
    
    

    /**on lance la population */
    Population();

    /**on dessinne le sol */
    drawFloor();

    // playMusic();
}

main();