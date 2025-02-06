// Creating a Function with Parameters

// Write a function to return the average of two integers and log the result.
// The formula to calculate the average of two integers is, average = (a + b) / 2

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
  // firstInteger
  let firstInteger = parseInt(readLine());
  // secondInteger
  let secondInteger = parseInt(readLine());

  /*
   * Write your code here and log the output.
   */
  function averageOfTwoIntegers(integer1, integer2) {
    let average = (integer1 + integer2) / 2;
    return average;
  }

  let result = averageOfTwoIntegers(firstInteger, secondInteger);
  console.log(result);
}
