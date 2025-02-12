let message = document.getElementById("message");
let saveBtn = document.getElementById("saveBtn");
let clearBtn = document.getElementById("clearBtn");
let storageKey = "userInput";

let storedInputValue = localStorage.getItem(storageKey);
if (storedInputValue === null) {
  message.value = "Clear And Enter Text";
} else {
  message.value = storedInputValue;
}

saveBtn.onclick = function () {
  let messageValue = message.value;
  localStorage.setItem(storageKey, messageValue);
};

clearBtn.onclick = function () {
  localStorage.removeItem(storageKey);
  message.value = "";
};
