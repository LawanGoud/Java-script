// Access the values of an object

// Given an object (person) in the prefilled code.
// Access the value of an object with the given key (objectKey) and log it.

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
  // person
  let person = {
    name: "Sam",
    age: 20,
    greet: function () {
      console.log("hello");
    },
    marks: {
      science: 70,
      math: 75,
    },
    "languages known": ["telugu", "hindi", "english"],
  };

  let valueWithTheGivenKey = person[objectKey];
  console.log(valueWithTheGivenKey);
}
