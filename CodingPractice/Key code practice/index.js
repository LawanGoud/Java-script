let userInput = document.getElementById("userInput");
let keyCodeList = document.getElementById("keyCodeList");

function createAndAppendKey(keyCode) {
  let listItem = document.createElement("li");
  listItem.classList.add("mt-1");
  listItem.textContent = keyCode;
  keyCodeList.appendChild(listItem);
}

function onKeydown(event) {
  createAndAppendKey(event.keyCode);
}

userInput.addEventListener("keydown", onKeydown);
