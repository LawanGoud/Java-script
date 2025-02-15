let fromUserInput = document.getElementById("fromUserInput");
let toUserInput = document.getElementById("toUserInput");
let counterText = document.getElementById("counterText");

function displayNumbers(fromCount, toCount) {
  let currentCount = fromCount;
  counterText.textContent = currentCount;

  let timerId = setInterval(function () {
    if (currentCount < toCount) {
      currentCount += 1;
      counterText.textContent = currentCount;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
}

function onClickStart() {
  let fromVal = fromUserInput.value;
  let toVal = toUserInput.value;

  if (fromVal === "") {
    alert("Please enter a number for the start value");
  } else if (toVal === "") {
    alert("Please enter a number for the end value");
  } else {
    let fromValToInteger = parseInt(fromVal);
    let toValToInteger = parseInt(toVal);

    displayNumbers(fromValToInteger, toValToInteger);
  }
}
