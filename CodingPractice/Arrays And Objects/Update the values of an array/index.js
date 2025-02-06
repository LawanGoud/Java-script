// Update the values of an array

// Given an array (myArray) in the prefilled code.
// Write a JS program to update the value located at the given index (index) of an array with the given (val) and log the updated array.

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
  let index = parseInt(readLine());
  let val = parseInt(readLine());
  let myArray = [25, 50, "center", 75, 100];
  myArray[index] = val;
  console.log(myArray);
}

// echo "2`n200" | node index.js
