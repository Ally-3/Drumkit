//when a key is pressed, sound is played
//when a button is clicked, sound is played

document.addEventListener('keydown', function(event) {
    playSound(event.key);
});

function playSound(key) {
    var audio;
    switch (key) {
        case 'f':
            audio = new Audio("./sounds/snare.wav");
            break;
        case 'g':
            audio = new Audio("./sounds/boom.wav");
            break;
        case 'h':
            audio = new Audio("./sounds/kick.wav");
            break;
        case 'j':
            audio = new Audio("./sounds/tom.wav");
            break;
        case 't':
            audio = new Audio("./sounds/hihat.wav");
            break;
        case 'y':
            audio = new Audio("./sounds/openhat.wav");
            break;
        case 'u':
            audio = new Audio("./sounds/ride.wav");
            break;
        default:
            return;
    }
    audio.play();
}