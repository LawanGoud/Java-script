let stopButton = document.getElementById("stopButton");
let stopLight = document.getElementById("stopLight");
let readyButton = document.getElementById("readyButton");
let readyLight = document.getElementById("readyLight");
let goButton = document.getElementById("goButton");
let goLight = document.getElementById("goLight");

function turnOnRed() {
  stopButton.style.backgroundColor = "#cf1124";
  stopLight.style.backgroundColor = "#cf1124";
  readyButton.style.backgroundColor = "#4b5069";
  readyLight.style.backgroundColor = "#4b5069";
  goButton.style.backgroundColor = "#4b5069";
  goLight.style.backgroundColor = "#4b5069";
}

function turnOnYellow() {
  readyButton.style.backgroundColor = "#f7c948";
  readyLight.style.backgroundColor = "#f7c948";
  stopButton.style.backgroundColor = "#4b5069";
  stopLight.style.backgroundColor = "#4b5069";
  goButton.style.backgroundColor = "#4b5069";
  goLight.style.backgroundColor = "#4b5069";
}

function turnOnGreen() {
  goButton.style.backgroundColor = "#199473";
  goLight.style.backgroundColor = "#199473";
  stopButton.style.backgroundColor = "#4b5069";
  stopLight.style.backgroundColor = "#4b5069";
  readyButton.style.backgroundColor = "#4b5069";
  readyLight.style.backgroundColor = "#4b5069";
}
