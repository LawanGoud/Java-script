// Create & Login an Object - 2

// Write a JS program to log a movie object with the given properties (key-value pairs).

/*
title - Baahubali
director - Rajamouli
producers - Shobhu, Raghavendra, Prasad
lead actors with their roles - an object with the key - value pairs:
prabhas - Baahubali, anushka - Devasena, rana - Bhallaladeva,
tamannah - Avanthika
*/

let movie = {
  title: "Baahubali",
  director: "Rajamouli",
  producers: ["Sobhu", "Raghavendra", "Prasad"],
  "lead actors with their roles": {
    prabhas: "Baahubali",
    anushka: "Devasena",
    rana: "Bhallaladeva",
    tamannah: "Avanthika",
  },
};
console.log(movie);
