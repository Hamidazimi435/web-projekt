const toggleThemeButton = document.getElementById('toggle-theme');
const body = document.body;

let isDarkMode = false;

toggleThemeButton.addEventListener('click', function () {
    if (!isDarkMode) {
        body.classList.add('dark-mode');
        toggleThemeButton.textContent = 'Dark Mode ausschalten';
        isDarkMode = true;
    } else {
        body.classList.remove('dark-mode');
        toggleThemeButton.textContent = 'Dark Mode einschalten';
        isDarkMode = false;
    }
});


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


const form = document.getElementById('user-form');
const nameInput = document.getElementById('username');
const userGreeting = document.getElementById('user-greeting');
const resetButton = document.getElementById('reset-form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // verhindert Seiten-Neuladen

    const name = nameInput.value.trim();

    if (name === '') {
        userGreeting.textContent = 'Bitte gib deinen Namen ein.';
        return;
    }

    userGreeting.textContent = `Hallo ${name}, schön dass du hier bist!`;
});

resetButton.addEventListener('click', function () {
    nameInput.value = '';
    userGreeting.textContent = '';
});




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


