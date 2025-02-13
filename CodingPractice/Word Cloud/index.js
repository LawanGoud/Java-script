let wordCloud = [
  "Hello",
  "hii",
  "how",
  "what",
  "you",
  "yourself",
  "name",
  "victory",
  "food",
  "lovely",
  "beautiful",
  "written",
  "where",
  "who",
  "awesome",
];

let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsg = document.getElementById("errorMsg");
let errorWarning = "Please Enter a Word";

function createAndAddWordWordCloud(word) {
  let randomFontSize = Math.ceil(Math.random() * 40) + "px";

  let wordEl = document.createElement("span");
  wordEl.textContent = word;
  wordEl.style.fontSize = randomFontSize;
  wordEl.classList.add("m-3");
  wordsContainer.appendChild(wordEl);
}

for (let word of wordCloud) {
  createAndAddWordWordCloud(word);
}

function onAddWordToWordCloud() {
  let userEnteredWord = userInput.value;
  if (userEnteredWord !== "") {
    createAndAddWordWordCloud(userEnteredWord);
    errorMsg.textContent = "";
    userInput.value = "";
  } else {
    errorMsg.textContent = errorWarning;
  }
}
