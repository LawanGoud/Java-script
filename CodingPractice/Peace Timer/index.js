let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");

let secondsLeft = 0;
let timerCompletedText = "Your moment is complete";
let timerId;

function clearPreviousTimers() {
  clearInterval(timerId);
}

function startTimer() {
  if (secondsLeft > 1) {
    secondsLeft = secondsLeft - 1;
    timerText.textContent = secondsLeft + " seconds left";
  } else {
    clearPreviousTimers();
    timerText.textContent = timerCompletedText;
  }
}

function setTimerAndShow() {
  timerText.textContent = secondsLeft + " seconds left";
  timerId = setInterval(startTimer, 1000);
}

twentySecondsBtn.onclick = function () {
  secondsLeft = 20;
  clearPreviousTimers();
  setTimerAndShow();
};

thirtySecondsBtn.onclick = function () {
  secondsLeft = 30;
  setTimerAndShow();
  clearPreviousTimers();
};

fortySecondsBtn.onclick = function () {
  secondsLeft = 40;
  setTimerAndShow();
  clearPreviousTimers();
};

oneMinuteBtn.onclick = function () {
  secondsLeft = 60;
  clearPreviousTimers();
  setTimerAndShow();
};
