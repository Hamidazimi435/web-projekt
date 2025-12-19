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



const nameInput = document.getElementById('username');
const greetButton = document.getElementById('greet-user');
const userGreeting = document.getElementById('user-greeting');

greetButton.addEventListener('click', function (){
    const name = nameInput.value.trim();

    if (name === ''){
        userGreeting.textContent = 'Bitte gib deine Name ein!:';
        return;
    }

    userGreeting.textContent = `Hallo ${name}, schön das du hier bist!`;
}) 



const liveClockParagraph = document.getElementById('live-clock');
//Funktion: Uhrzeit 
function getCurrentTime () {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

// Alle 1 Sekunde aktuelisieren
setInterval (function (){
    liveClockParagraph.textContent = getCurrentTime();
}, 1000);

// Beim ersten Laden sofort anzeigen
liveClockParagraph.textContent = getCurrentTime();


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

