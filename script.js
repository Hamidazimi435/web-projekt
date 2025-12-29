// ------------------------------
// Dark Mode (mit LocalStorage)
// ------------------------------
const toggleThemeButton = document.getElementById('toggle-theme');
const body = document.body;

// Theme beim Laden anwenden
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleThemeButton.textContent = 'Dark Mode ausschalten';
} else {
  toggleThemeButton.textContent = 'Dark Mode einschalten';
}

// Button: Theme umschalten + speichern
toggleThemeButton.addEventListener('click', function () {
  const isDark = body.classList.contains('dark-mode');

  if (!isDark) {
    body.classList.add('dark-mode');
    toggleThemeButton.textContent = 'Dark Mode ausschalten';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    toggleThemeButton.textContent = 'Dark Mode einschalten';
    localStorage.setItem('theme', 'light');
  }
});

// ------------------------------
// Zeitabhängige Begrüßung
// ------------------------------
const timeGreetingParagraph = document.getElementById('time-greeting');
const nowForGreeting = new Date();
const hour = nowForGreeting.getHours();

let timeGreetingText = '';

if (hour >= 5 && hour < 12) {
  timeGreetingText = 'Guten Morgen';
} else if (hour >= 12 && hour < 18) {
  timeGreetingText = 'Guten Tag';
} else {
  timeGreetingText = 'Guten Abend';
}

timeGreetingParagraph.textContent = timeGreetingText;

// NEU: Fade-In auslösen
timeGreetingParagraph.classList.remove('fade-in');
void timeGreetingParagraph.offsetWidth;
timeGreetingParagraph.classList.add('fade-in');

// ------------------------------
// Live Uhr (HH:MM:SS)
// ------------------------------
const liveClockParagraph = document.getElementById('live-clock');

function getCurrentTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

// sofort anzeigen
liveClockParagraph.textContent = getCurrentTime();

// jede Sekunde aktualisieren
setInterval(function () {
  liveClockParagraph.textContent = getCurrentTime();
}, 1000);

// ------------------------------
// Nachricht ein-/ausblenden (Toggle)
// ------------------------------
const messageButton = document.getElementById('show-message');
const messageParagraph = document.getElementById('message');

let isMessageVisible = false;
const messageText = 'Schön, dass du hier bist!';

messageButton.addEventListener('click', function () {
  if (!isMessageVisible) {
    messageParagraph.textContent = messageText;
    messageButton.textContent = 'Nachricht ausblenden';
    isMessageVisible = true;
  } else {
    messageParagraph.textContent = '';
    messageButton.textContent = 'Nachricht anzeigen';
    isMessageVisible = false;
  }
});

// ------------------------------
// Formular: Name + Validierung + LocalStorage
// ------------------------------
const form = document.getElementById('user-form');
const nameInput = document.getElementById('username');
const userGreeting = document.getElementById('user-greeting');
const resetButton = document.getElementById('reset-form');
const errorMessage = document.getElementById('error-message');

// gespeicherten Namen laden
const savedName = localStorage.getItem('username');
if (savedName) {
  nameInput.value = savedName;
  userGreeting.textContent = `Hallo ${savedName}, schön dass du hier bist!`;
  nameInput.classList.add('input-success');
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();

  // Styles/Fehler zurücksetzen
  nameInput.classList.remove('input-error', 'input-success');
  errorMessage.textContent = '';

  if (name === '') {
    nameInput.classList.add('input-error');
    errorMessage.textContent = 'Bitte gib deinen Namen ein.';
    userGreeting.textContent = '';
    return;
  }

  nameInput.classList.add('input-success');
  localStorage.setItem('username', name);
  userGreeting.textContent = `Hallo ${name}, schön dass du hier bist!`;
});

resetButton.addEventListener('click', function () {
  nameInput.value = '';
  userGreeting.textContent = '';
  errorMessage.textContent = '';

  nameInput.classList.remove('input-error', 'input-success');
  localStorage.removeItem('username');
});
