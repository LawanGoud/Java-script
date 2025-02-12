let input = document.getElementById("input");
let saveBtn = document.getElementById("saveBtn");
let clearBtn = document.getElementById("clearBtn");
let storageKey = "userInput";

let storageValue = localStorage.getItem(storageKey);

if (storageValue === null) {
  localStorage.setItem(storageKey, "Hello Guru!");
}

input.value = localStorage.getItem(storageKey);

saveBtn.onclick = function () {
  let inputValue = input.value;
  localStorage.setItem(storageKey, inputValue);
};

clearBtn.onclick = function () {
  localStorage.removeItem(storageKey);
  input.value = "";
};
