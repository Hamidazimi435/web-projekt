const button = document.getElementById('show-message');
const messageParagraph = document.getElementById('message');

button.addEventListener('click', function () {
    messageParagraph.textContent = 'Schön, das du hier bist!';
});