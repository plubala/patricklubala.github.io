const yearEl = document.getElementById('year');
const clockEl = document.getElementById('clock');
const dateEl = document.getElementById('dateText');

function updateClock() {
  const now = new Date();

  if (yearEl) {
    yearEl.textContent = now.getFullYear();
  }

  if (clockEl) {
    clockEl.textContent = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString([], {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}

updateClock();
setInterval(updateClock, 1000);
