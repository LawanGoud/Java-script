let bgColorInput = document.getElementById("bgColorInput");
let fontColorInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontWeightInput = document.getElementById("fontWeightInput");
let paddingInput = document.getElementById("paddingInput");
let borderRadiusInput = document.getElementById("borderRadiusInput");
let customButton = document.getElementById("customButton");

function buttonMaker() {
  let bgColorValue = bgColorInput.value;
  customButton.style.backgroundColor = bgColorValue;
  let fontColorValue = fontColorInput.value;
  customButton.style.color = fontColorValue;
  let fontSize = fontSizeInput.value;
  customButton.style.fontSize = fontSize;
  let fontWeightValue = fontWeightInput.value;
  customButton.style.fontWeight = fontWeightValue;
  let paddingValue = paddingInput.value;
  customButton.style.padding = paddingValue;
  let borderRadiusValue = borderRadiusInput.value;
  customButton.style.borderRadius = borderRadiusValue;
}
