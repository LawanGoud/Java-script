// Delete the last value of the array

//Given an array (myArray)
// Write a JS program to delete the last value of the array using the array method pop and log the deleted value and updated array.

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
  let deletedVal = myArray.pop();
  console.log(deletedVal);
  console.log(myArray);
}
