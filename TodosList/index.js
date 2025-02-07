let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [
  {
    text: "Learn HTML",
  },
  {
    text: "Learn CSS",
  },
  {
    text: "Learn JavaScript",
  },
];

function createAndAppend(todo) {
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex");
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = "checkboxInput";
  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", "checkboxInput");
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("bi", "bi-trash", "delete-icon");
  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppend(todo);
}
