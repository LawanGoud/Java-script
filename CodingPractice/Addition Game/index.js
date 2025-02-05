let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let successMessage = "Congratulations! You got it right!";
let tryAgainMessage = "Please, Try Again!";

firstNumberElement.textContent = Math.ceil(Math.random() * 100);
secondNumberElement.textContent = Math.ceil(Math.random() * 100);

function checkResult() {
  let firstNumber = parseInt(firstNumberElement.textContent);
  let secondNumber = parseInt(secondNumberElement.textContent);
  let userAnswer = parseInt(userInput.value);
  let sumOfTwoIntegers = firstNumber + secondNumber;

  if (userAnswer === sumOfTwoIntegers) {
    gameResult.textContent = successMessage;
    gameResult.style.backgroundColor = "#028a0f";
  } else {
    gameResult.textContent = tryAgainMessage;
    gameResult.style.backgroundColor = "#1e217c";
  }
}

function resetGame() {
  let firstRandomNumber = Math.ceil(Math.random() * 100);
  let secondRandomNumber = Math.ceil(Math.random() * 100);
  firstNumber.textContent = firstRandomNumber;
  secondNumber.textContent = secondRandomNumber;
  userInput.value = "";
  gameResult.textContent = "";
}
