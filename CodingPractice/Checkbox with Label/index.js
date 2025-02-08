let checkboxWithLabelContainer = document.getElementById(
  "checkboxWithLabelContainer"
);
checkboxWithLabelContainer.classList.add("text-center", "p-5");

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkbox";
checkboxWithLabelContainer.appendChild(inputElement);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkbox");
labelElement.classList.add("ml-2");
labelElement.id = "checkboxLabel";
labelElement.textContent = "Click me!";
checkboxWithLabelContainer.appendChild(labelElement);
