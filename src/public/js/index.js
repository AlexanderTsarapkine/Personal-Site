let cubeContainer = document.getElementById('cube-container');
let homePageButtonContainer = document.getElementById('home-page-button-container');

document.getElementById('devButton').addEventListener('click', function() {
    cubeContainer.classList.remove('hidden');
    homePageButtonContainer.classList.add('hidden');
    setTimeout(function() {
        cubeContainer.classList.add('active');
    }, 1);
});

document.getElementById('hrButton').addEventListener('click', function() {
    cubeContainer.classList.add('hidden');
    cubeContainer.classList.remove('active');
});