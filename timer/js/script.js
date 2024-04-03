let timerInterval;
let time = 60; // заданное значение таймера в секундах
let seconds = time;
let isRunning = false;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function updateTimer() {
  timerElement.textContent = `${seconds} sec`;
}

function startTimer() {
  if (!isRunning && seconds > 0) {
    isRunning = true;
    timerInterval = setInterval(() => {
      seconds--;
      updateTimer();
      if (seconds === 0) {
        stopTimer();
      }
    }, 1000);
  }
}
startButton.addEventListener('click', startTimer);

function stopTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}
stopButton.addEventListener('click', stopTimer);
function resetTimer() {
  stopTimer();
  seconds = time;
  updateTimer();
}

resetButton.addEventListener('click', resetTimer);

updateTimer();