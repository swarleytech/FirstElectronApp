const audio = document.getElementById('audioTest');
const playbutton = document.getElementById('playbutton');
const progressBar = document.getElementById('progressBar');


audio.src = 'music/song1.mp3';

playbutton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play(); 
        playbutton.textContent = 'Pause';
    } else {
        audio.pause();
        playbutton.textContent = 'Play';
    }
});