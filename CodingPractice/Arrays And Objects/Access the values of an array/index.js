// Given an array (myArray) in the prefilled code.
// Write a JS program to log the value located at the given index (index).

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
  // index
  let index = parseInt(readLine());
  // myArray
  let myArray = [25, false, "green", "apple"];

  /*
   * Write your code here and log the output.
   */
  let valueAtGivenIndex = myArray[index];
  console.log(valueAtGivenIndex);
}

// echo "2" | node index.js in terminal
