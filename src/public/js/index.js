let cubeContainer = document.getElementById('cube-container');
let homePageButtonContainer = document.getElementById('home-page-button-container');
let resumeSliderContainer = document.getElementById('resume-slider-container');


document.getElementById('devButton').addEventListener('click', function() {
    cubeContainer.classList.remove('hidden');
    homePageButtonContainer.classList.add('hidden');
    setTimeout(function() {
        cubeContainer.classList.add('active');
        setTimeout(function() {
            window.location.href = '/dumpster';
        }, 5000);
    }, 1);
});

document.getElementById('hrButton').addEventListener('click', function() {
    if (resumeSliderContainer.classList.contains('collapsed')) {
        resumeSliderContainer.classList.remove('collapsed');
    } else {
        resumeSliderContainer.classList.add('collapsed');
    }
});

document.getElementById('collapse-button').addEventListener('click', function() {
    const container = document.getElementById('resume-slider-container');
    container.classList.toggle('collapsed');
});