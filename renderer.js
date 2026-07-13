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

audio.addEventListener('timeupdate', () => {

    const percentCompleted = (audio.currentTime / audio.duration) * 100;
    
    progressBar.value = percentCompleted;
});

progressBar.addEventListener('input', () => {

    const seekTime = (progressBar.value / 100) * audio.duration;

    audio.currentTime = seekTime;
});