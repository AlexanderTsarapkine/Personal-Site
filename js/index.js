let cubeContainer = document.getElementById('cube-container');
let homePageButtonContainer = document.getElementById('home-page-button-container');
let resumeSliderContainer = document.getElementById('resume-slider-container');


document.getElementById('devButton').addEventListener('click', function() {
    cubeContainer.classList.remove('hidden');
    homePageButtonContainer.classList.add('hidden');
    setTimeout(function() {
        cubeContainer.classList.add('active');

        const audio = new Audio('/audio/concreteScrape.mp3');
        audio.play().catch(error => console.log('Audio playback failed:', error));

        setTimeout(function() {
            window.location.href = '/dumpster';
        }, 4000);
    }, 1);
});

document.getElementById('hrButton').addEventListener('click', function() {
    resumeSliderContainer.classList.toggle('collapsed');
});

document.getElementById('collapse-button').addEventListener('click', function() {
    const container = document.getElementById('resume-slider-container');
    container.classList.toggle('collapsed');
});