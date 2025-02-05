let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");

let firstRandomNumber = Math.ceil(Math.random() * 100);
let secondRandomNumber = Math.ceil(Math.random() * 100);

firstNumber.textContent = firstRandomNumber;
secondNumber.textContent = secondRandomNumber;
