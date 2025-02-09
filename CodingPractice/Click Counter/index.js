let counterValue = document.getElementById("counterValue");

let clickCount = localStorage.getItem("clickCount");

if (clickCount === null) {
  counterValue.textContent = 0;
} else {
  counterValue.textContent = clickCount;
}

function onIncrementCount() {
  let previousCounterValue = counterValue.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  localStorage.setItem("clickCount", updatedCounterValue);
  counterValue.textContent = updatedCounterValue;
}
