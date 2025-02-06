// Add a property to an object

// Given an object (meals) in the prefilled code.
// Add a new  property to the object with the given key (objectKey) and value (val) and log the updated object

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
  // objectKey
  let objectKey = readLine();
  // val
  let val = JSON.parse(readLine().replace(/'/g, '"'));
  // meals
  let meals = {
    breakfast: "Oatmeal",
    lunch: "Burrito",
    dinner: "Chapathi",
  };
  meals[objectKey] = val;
  console.log(meals);
}
