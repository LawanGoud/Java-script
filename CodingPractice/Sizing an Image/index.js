let minImageWidth = 100;
let maxImageWidth = 300;
let originalImageWidth = 200;

let dogImage = document.getElementById("dogImage");
dogImage.style.width = originalImageWidth + "px";

let imageWidth = document.getElementById("imageWidth");
imageWidth.textContent = originalImageWidth + "px";

function onIncrement() {
  originalImageWidth = originalImageWidth + 5;
  let newWidth = originalImageWidth + "px";
  dogImage.style.width = newWidth;
  imageWidth.textContent = newWidth;
}

function onDecrement() {
  originalImageWidth = originalImageWidth - 5;
  let newWidth = originalImageWidth + "px";
  dogImage.style.width = newWidth;
  imageWidth.textContent = newWidth;
}
