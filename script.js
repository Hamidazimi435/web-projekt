const button = document.getElementById('show-message');
const messageParagraph = document.getElementById('message');

let isVisible = false;

button.addEventListener('click', function () {
    if (!isVisible) {
        messageParagraph.textContent = 'Schön, dass du hier bist!';
        button.textContent = 'Nachricht ausblenden';
        isVisible = true;
    }else {
        messageParagraph.textContent = '';
        button.textContent = 'Nachricht anzeigen';
        isVisible = false;
    }
    
});