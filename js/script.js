function updateTimer() {
    const startDate = new Date('2023-07-06T13:30:00');
    const now = new Date();
    const elapsed = now - startDate;

    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const displayHours = hours % 24;
    const displayMinutes = minutes % 60;
    const displaySeconds = seconds % 60;

    const timerElement = document.getElementById('timer');
    timerElement.innerHTML = `${days}d ${displayHours}h ${displayMinutes}m ${displaySeconds}s`;
}

setInterval(updateTimer, 1000);
