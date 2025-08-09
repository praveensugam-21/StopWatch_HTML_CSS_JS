let startTime;
let elapsedTime = 0;
let timerInterval;

const timeDisplay = document.querySelector(".Time");
const startBtn = document.querySelector(".Start");
const stopBtn = document.querySelector(".Stop");
const resetBtn = document.querySelector(".Reset");

function formatTime(ms) {
  let milliseconds = Math.floor((ms % 1000) / 10);
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor(ms / (1000 * 60 * 60));

  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  milliseconds = milliseconds.toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function startTimer() {
  if (timerInterval) return; // prevent multiple intervals
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timeDisplay.textContent = formatTime(elapsedTime);
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  timeDisplay.textContent = "00:00:00:00";
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
