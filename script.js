const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

function nextSaturdayAt18() {
  const now = new Date();
  const target = new Date(now);
  target.setHours(18, 0, 0, 0);
  const day = now.getDay();
  const saturday = 6;
  let diff = (saturday - day + 7) % 7;
  if (diff === 0 && now >= target) diff = 7;
  target.setDate(now.getDate() + diff);
  return target;
}

function updateCountdown() {
  const now = new Date();
  const target = nextSaturdayAt18();
  const ms = Math.max(0, target - now);
  const totalMinutes = Math.floor(ms / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes - days * 60 * 24) / 60);
  const minutes = totalMinutes % 60;
  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 30000);
