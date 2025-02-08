let cartItemTextInput = document.getElementById("cartItemTextInput");
let cartItemsContainer = document.getElementById("cartItemsContainer");

function onAddCartItem() {
  let cartItemName = cartItemTextInput.value;

  let cartElement = document.createElement("li");
  cartElement.textContent = cartItemName;
  cartItemTextInput.value = "";
  cartItemsContainer.appendChild(cartElement);
}
