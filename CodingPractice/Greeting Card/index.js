let greeting =
  '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parsedValue = JSON.parse(greeting);

let greetText = document.getElementById("greetText");
let greetFrom = document.getElementById("greetFrom");
let greetTo = document.getElementById("greetTo");

greetFrom.textContent = "From: " + parsedValue.from;
greetTo.textContent = "To:" + parsedValue.to;
greetText.textContent = parsedValue.greetText;
