let resumeSliderContainer = document.getElementById('resume-slider-container');
let returnContainer = document.getElementById('return-container');

// Check if this is a fresh page load vs back/forward navigation
const isBackNavigation = performance.getEntriesByType("navigation")[0].type === "back_forward";

const playBoom = () => {
    const audio = new Audio('/audio/vineBoom.mp3');
    audio.play().catch(error => console.log('Audio playback failed:', error));
};

document.body.addEventListener('click', function(e) {
    const gif = document.createElement('img');
    gif.src = '/images/explosion.gif';
    gif.className = 'click-gif';
    gif.style.left = e.pageX + 'px';
    gif.style.top = e.pageY + 'px';
    
    document.body.appendChild(gif);
    playBoom();

    setTimeout(() => {
        gif.remove();
    }, 700);
});

const handleResume = () => {
    if (resumeSliderContainer.classList.contains('collapsed')) {
        const audio = new Audio('/audio/slideWhistleUp.mp3');
        audio.play().catch(error => console.log('Audio playback failed:', error));
    } else{
        const audio = new Audio('/audio/slideWhistleDown.mp3');
        audio.play().catch(error => console.log('Audio playback failed:', error));
    }

    setTimeout(() => {
        resumeSliderContainer.classList.toggle('collapsed');
    }, 300);
};


document.getElementById('resume-button').addEventListener('click', function() {
    handleResume();
});

document.getElementById('collapse-button').addEventListener('click', function() {
    handleResume();
});

document.getElementById('return-button').addEventListener('click', function() {
    returnContainer.classList.add('active');

    setTimeout(() => {
        window.location.href = '/';
    }, 500);
});



// if (!isBackNavigation) {
//     playBoom();
// };
