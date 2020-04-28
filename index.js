const dogButton = document.getElementById('dog-button');


dogButton.addEventListener('click', function () {
    dogButton.textContent = 'Generating Doggo...';
    $.get('https://dog.ceo/api/breeds/image/random')
});