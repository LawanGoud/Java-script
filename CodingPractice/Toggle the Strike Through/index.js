let checkBoxWithLabelContainer = document.getElementById(
  "checkBoxWithLabelContainer"
);

function onCheckboxStatusChange() {
  labelElement.classList.toggle("strike-through");
}

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkbox";
inputElement.onclick = function () {
  onCheckboxStatusChange();
};
checkBoxWithLabelContainer.appendChild(inputElement);

let labelElement = document.createElement("label");
labelElement.classList.add("checkbox-label");
labelElement.setAttribute("for", "checkbox");
labelElement.id = "checkboxLabel";
labelElement.textContent = "I am label";
checkBoxWithLabelContainer.appendChild(labelElement);
