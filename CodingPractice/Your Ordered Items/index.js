let itemList = [
  {
    itemName: "Veg Biryani",
    uniqueNo: 1,
  },
  {
    itemName: "Chicken 65",
    uniqueNo: 2,
  },
  {
    itemName: "Paratha",
    uniqueNo: 3,
  },
];

let itemListContainer = document.getElementById("itemListContainer");

function onDeleteItem(itemId) {
  let itemElement = document.getElementById(itemId);
  itemElement.remove();
}

function createAndAppendItem(item) {
  let itemId = "item" + item.uniqueNo;
  let buttonId = "button" + item.uniqueNo;

  let itemElement = document.createElement("li");
  itemElement.classList.add("ordered-item");
  itemElement.id = itemId;
  itemElement.textContent = item.itemName;
  itemListContainer.appendChild(itemElement);

  let buttonElement = document.createElement("button");
  buttonElement.classList.add("btn", "btn-danger", "ml-3");
  buttonElement.id = buttonId;
  buttonElement.textContent = "Cancel";
  buttonElement.onclick = function () {
    onDeleteItem(itemId);
  };
  itemElement.appendChild(buttonElement);
}

for (let item of itemList) {
  createAndAppendItem(item);
}
