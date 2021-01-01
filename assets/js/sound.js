var musicValue = true;
var btnOff = document.getElementById('btn-sound-off');
var btnOn = document.getElementById('btn-sound-on');

function soundOn() {
    musicValue = true;
    btnOn.style.display='none';
    btnOff.style.display='inline';
}
function soundOff() {
    musicValue = false;
    btnOff.style.display='none';
    btnOn.style.display='inline';
}
var music = new Audio('assets/sound/Mer-Ka-Ba.mp3');

function playMusic() 
{
    switch (musicValue) {
        case true :
        /**on envoie la musique */
        music.play();
        break;
        case false : 
        music.pause();
        break;
    }
}