let groceryList = [
  "Apples",
  "Boost Drink",
  "Butterscotch Ice Cream",
  "Tomato Ketchup",
  "Dairy Milk Chocolates",
  "Pasta",
];

let groceryListContainer = document.getElementById("groceryListContainer");
groceryListContainer.classList.add("grocery-list-container");

let headingElement = document.createElement("h1");
headingElement.classList.add("grocery-list-heading");
headingElement.textContent = "Grocery List";
groceryListContainer.appendChild(headingElement);

let listItemsContainer = document.createElement("ul");
listItemsContainer.classList.add("list-items-container");
groceryListContainer.appendChild(listItemsContainer);

for (let groceryItem of groceryList) {
  let listElement = document.createElement("li");
  listElement.classList.add("list-item");
  listElement.textContent = groceryItem;
  listItemsContainer.appendChild(listElement);
}
