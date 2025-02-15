let counterValue = document.getElementById("counterValue");
let counter = 0;

let counterTimer = function () {
  counter = counter + 1;
  counterValue.textContent = counter;
};

let intervalId = setInterval(counterTimer, 1000);

let clearBtn = document.getElementById("clearBtn");
clearBtn.onclick = function () {
  clearInterval(intervalId);
};
