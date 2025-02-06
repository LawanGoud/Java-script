// Given a function (greetWithName) in the prefilled code.
// Log in value returned by the function (greetWithName) by passing the given name (personName) as an argument to it.

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  // personName
  let personName = readLine();

  // function greetWithName
  function greetWithName(personName) {
    let greetings = "Hi " + personName;
    return greetings;
  }

  /*
   * Write your code here and log the output.
   */
  let wishes = greetWithName(personName);
  console.log(wishes);
}
