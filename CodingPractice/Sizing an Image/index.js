let minImageWidth = 100;
let maxImageWidth = 300;
let originalImageWidth = 200;

let dogImage = document.getElementById("dogImage");
dogImage.style.width = originalImageWidth + "px";

let imageWidth = document.getElementById("imageWidth");
imageWidth.textContent = originalImageWidth + "px";

let warningMessage = document.getElementById("warningMessage");
let maxWidthWarningMessage = "Too big. Decrease the size of the Image";
let minWidthWarningMessage = "Can't Visible. Increase the size of the Image";

function onIncrement() {
  if (originalImageWidth >= maxImageWidth) {
    warningMessage.textContent = maxWidthWarningMessage;
  } else {
    originalImageWidth = originalImageWidth + 5;
    let newWidth = originalImageWidth + "px";
    warningMessage.textContent = "";
    dogImage.style.width = newWidth;
    imageWidth.textContent = newWidth;
  }
}

function onDecrement() {
  if (originalImageWidth <= minImageWidth) {
    warningMessage.textContent = minWidthWarningMessage;
  } else {
    originalImageWidth = originalImageWidth - 5;
    let newWidth = originalImageWidth + "px";
    warningMessage.textContent = "";
    dogImage.style.width = newWidth;
    imageWidth.textContent = newWidth;
  }
}
