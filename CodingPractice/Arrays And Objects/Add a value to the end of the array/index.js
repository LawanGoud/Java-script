// Add a value to the end of the array

// Given an array (myArray) and the value (val).
// Write a JS Program to add a value to the end of the array using the array method push and log the updated array.

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
  let val = parseInt(readLine());
  myArray.push(val);
  console.log(myArray);
}

// @"
// ["apple", "banana", "cherry"]
// 5
// "@ | node index.js
