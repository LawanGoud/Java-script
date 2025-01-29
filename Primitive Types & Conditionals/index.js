let counterElement = document.getElementById("counterValue");

function onIncrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  counterElement.textContent = updatedCounterValue;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  } else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  } else {
    counterElement.style.color = "black";
  }
}

function onDecrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue - 1);
  counterElement.textContent = updatedCounterValue;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  } else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  } else {
    counterElement.style.color = "black";
  }
}

function onReset() {
  let counterValue = 0;
  counterElement.textContent = counterValue;
  counterElement.style.color = "black";
}
