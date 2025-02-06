// Find the length of the array

// Given an array (myArray)
// Write a JS program to find the length of the array and log the length.

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
  let input = readLine().replace(/'/g, '"');
  let myArray = JSON.parse(input);
  let arrayLength = myArray.length;
  console.log(arrayLength);
}

// echo '["apple", "banana", "cherry", "date"]' | node index.js
