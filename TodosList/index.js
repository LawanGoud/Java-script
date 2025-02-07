let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [
  {
    text: "Learn HTML",
    uniqueNo: 1,
  },
  {
    text: "Learn CSS",
    uniqueNo: 2,
  },
  {
    text: "Learn JavaScript",
    uniqueNo: 3,
  },
];

function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);
}

function onTodoStatusChange(checkboxId, labelId) {
  let checkbox = document.getElementById(checkboxId);
  let label = document.getElementById(labelId);
  // if (checkbox.checked === true) {
  //   label.classList.add("checked");
  // } else {
  //   label.classList.remove("checked");
  // }
  label.classList.toggle("checked");
}

function createAndAppend(todo) {
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;
  let todoId = "todo" + todo.uniqueNo;

  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.classList.add("checkbox-input");
  inputElement.onclick = function () {
    onTodoStatusChange(checkboxId, labelId);
  };
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelElement.id = labelId;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("bi", "bi-trash", "delete-icon");
  deleteIconContainer.onclick = function () {
    onDeleteTodo(todoId);
  };
  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppend(todo);
}
