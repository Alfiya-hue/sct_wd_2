let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let laps = [];

function formatTime(ms) {
  let date = new Date(ms);
  return (
    String(date.getUTCHours()).padStart(2, '0') + ':' +
    String(date.getUTCMinutes()).padStart(2, '0') + ':' +
    String(date.getUTCSeconds()).padStart(2, '0') + '.' +
    String(date.getUTCMilliseconds()).padStart(3, '0')
  );
}

function start() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      document.getElementById('display').textContent = formatTime(elapsedTime);
    }, 10);
  }
}

function pause() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  document.getElementById('display').textContent = "00:00:00.000";
  document.getElementById('laps').innerHTML = "";
  laps = [];
}

function lap() {
  if (timerInterval) {
    laps.push(elapsedTime);
    const li = document.createElement('li');
    li.textContent = `Lap ${laps.length}: ${formatTime(elapsedTime)}`;
    document.getElementById('laps').appendChild(li);
  }
}
