const timeGreetingParagraph = document.getElementById('time-greeting');
//Atuelle Uhrzeit holen
const now = new Date();
const hour = now.getHours();

let timeGreetingText = '';

if (hour >= 5 && hour < 12) {
    timeGreetingText = 'Guten Morgen';
} else if (hour >= 12 && hour < 18 ){
    timeGreetingText = 'Guten Tag';
} else {
    timeGreetingText = 'Guten Abend';
}

// Text ins HTML schreiben
timeGreetingParagraph.textContent = timeGreetingText;


const button = document.getElementById('show-message');
const messageParagraph = document.getElementById('message');


let isVisible = false;
const greetingText = 'Schön, dass du hier bist!'

button.addEventListener('click', function () {
    if (!isVisible) {
        messageParagraph.textContent = greetingText;
        button.textContent = 'Nachricht ausblenden';
        isVisible = true;
    }else {
        messageParagraph.textContent = '';
        button.textContent = 'Nachricht anzeigen';
        isVisible = false;
    }
    
});

