//when a key is pressed, sound is played
document.addEventListener('keydown', function(event) {
    if(event.key === 'f') {
        var audio = new Audio("./sounds/snare.wav");
        audio.play();
    } else if(event.key === 'g') {
        var audio = new Audio("./sounds/boom.wav");
        audio.play();
    } else if(event.key === 'h') {
        var audio = new Audio("./sounds/kick.wav");
        audio.play();
    } else if(event.key === 'j') {
        var audio = new Audio("./sounds/tom.wav");
        audio.play();
    } else if(event.key === 't') {
        var audio = new Audio("./sounds/hihat.wav");
        audio.play();
    } else if(event.key === 'y') {
        var audio = new Audio("./sounds/openhat.wav");
        audio.play();
    } else if(event.key === 'u') {
        var audio = new Audio("./sounds/ride.wav");
        audio.play();
    }
});

//when a button is clicked, sound is played