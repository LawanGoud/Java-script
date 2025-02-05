let bgColorsArray = [
  "#e75d7c",
  "#b16cef",
  "#53cca4",
  "#efc84d",
  "#628ef0",
  "#184b73",
  "#883e7f",
  "#ed048b",
];

let bgContainer = document.getElementById("bgContainer");
bgContainer.style.backgroundColor = bgColorsArray[0];

function onChangeBgColor() {
  let numberOfBgColor = bgColorsArray.length;
  let randomBgColorIndex = Math.floor(Math.random() * numberOfBgColor);

  if (randomBgColorIndex === numberOfBgColor) {
    randomBgColorIndex = numberOfBgColor - 1;
  }
  let randomBgColor = bgColorsArray[randomBgColorIndex];
  bgContainer.style.backgroundColor = randomBgColor;
}
