// Game Mode

// Given an array of friends (arrayOfFriends) to play the game.
// If the number of friends is zero, the game mode is "Solo".
// If the number of friends is one, the game mode is "Dual".
// If the number of friends is other than zero and one, the game mode is "Squad".
// Write a function 'getPreferredGameMode' that returns the preferred game mode based on the number of friends (length of arrayOfFriends).

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
  // arrayOfFriends
  let arrayOfFriends = JSON.parse(readLine().replace(/'/g, '"'));
  let noOfFriends = arrayOfFriends.length;
  function getPreferredGameMode(noOfFriends) {
    if (noOfFriends === 0) {
      return "Solo";
    } else if (noOfFriends === 1) {
      return "Dual";
    } else {
      return "Squad";
    }
  }

  let gameMode = getPreferredGameMode(noOfFriends);
  console.log(gameMode);
}
