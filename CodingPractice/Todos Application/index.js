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

let todoItemsContainer = document.getElementById("todoItemsContainer");

function onTodoStatusChange(checkboxId, labelId) {
  let checkbox = document.getElementById(checkboxId);
  let label = document.getElementById(labelId);
  label.classList.toggle("checked");
}

function createAndAppend(todo) {
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;

  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex");
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
  labelElement.id = labelId;
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

let todosCount = todoList.length;

function onAddTodo() {
  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;

  if (userInputValue === "") {
    alert("Enter Valid Text");
    return;
  }

  todosCount = todosCount + 1;

  let newTodo = {
    text: userInputValue,
    uniqueNo: todosCount,
  };
  createAndAppend(newTodo);
  userInputElement.value = "";
}

addTodoButton.onclick = function () {
  onAddTodo();
};
