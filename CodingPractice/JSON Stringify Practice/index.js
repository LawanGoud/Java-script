let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];

let person = {
  name: "Rahul",
  age: 25,
  gender: "Male",
};

let todos = [
  {
    todo: "Attending CCBP sessions",
    todoStatus: "Completed",
  },
  {
    todo: "Completing practice sets",
    todoStatus: "Not Completed",
  },
  {
    todo: "Asking doubts",
    todoStatus: "Completed",
  },
];

let valuesToStringify = [bikes, person, todos];

let jsonContainer = document.getElementById("jsonContainer");

function createAndAppendValue(stringifiedValue) {
  let valueContainer = document.createElement("div");
  valueContainer.classList.add("value-container");
  jsonContainer.appendChild(valueContainer);

  let value = document.createElement("span");
  value.textContent = stringifiedValue;
  value.classList.add("value");
  valueContainer.appendChild(value);
}

for (let value of valuesToStringify) {
  let stringifiedValue = JSON.stringify(value);
  createAndAppendValue(stringifiedValue);
}
