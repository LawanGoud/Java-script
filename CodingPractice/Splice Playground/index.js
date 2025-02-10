let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");
let spliceBtn = document.getElementById("spliceBtn");
let updatedArray = document.getElementById("updatedArray");

function convertArrtoJSONStringAndAppend() {
  const stringifiedArr = JSON.stringify(arr);
  updatedArray.textContent = stringifiedArr;
}

convertArrtoJSONStringAndAppend();

spliceBtn.onclick = function () {
  let startIndex = startIndexInput.value;
  let deleteCount = deleteCountInput.value;
  let itemToAdd = itemToAddInput.value;

  if (startIndex === "") {
    alert("Please enter a valid start index");
    return;
  }

  if (deleteCount === "") {
    alert("Please enter a valid delete count");
  }

  if (itemToAdd === "") {
    arr.splice(parseInt(startIndex), parseInt(deleteCount));
  } else {
    arr.splice(parseInt(startIndex), parseInt(deleteCount), itemToAdd);
  }

  startIndexInput.value = "";
  deleteCountInput.value = "";
  itemToAddInput.value = "";
  convertArrtoJSONStringAndAppend();
};
