let numbers = [17, 31, 77, 20, 63];

let userInput = document.getElementById("userInput");
let indexOfNumber = document.getElementById("indexOfNumber");

function findIndexOfNumber() {
  let number = parseInt(userInput.value);
  let itemIndex = numbers.findIndex(function (eachItem) {
    if (eachItem === number) {
      return true;
    } else {
      return false;
    }
  });
  indexOfNumber.textContent = itemIndex;
}
