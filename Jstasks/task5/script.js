// const todoForm = document.querySelector(".todo-form");
// const todoInput = document.querySelector(".todo-input");
// const todoItemsList = document.querySelector(".todo-items");

// let todos = [];

// todoForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   addTodo(todoInput.value);
// });

// function addTodo(item) {
//   if (item !== "") {
//     const todo = {
//       id: Date.now(),
//       name: item,
//       completed: false,
//     };

//     todos.push(todo);
//     addToLocalStorage(todos);

//     todoInput.value = "";
//   }
// }

// function renderTodos(todos) {
//   todoItemsList.innerHTML = "";

//   todos.forEach(function (item) {
//     const checked = item.completed ? "checked" : null;

//     const li = document.createElement("li");
//     li.setAttribute("class", "item");
//     li.setAttribute("data-key", item.id);
//     /* <li class="item" data-key="20200708">
//           <input type="checkbox" class="checkbox">
//           Go to Gym
//           <button class="delete-button">X</button>
//         </li> */
//     if (item.completed === true) {
//       li.classList.add("checked");
//     }

//     li.innerHTML = `
//       <input type="none" class="none" ${checked}>
//       ${item.name}
//       <button class="delete-button">remove</button>
//     `;
//     todoItemsList.append(li);
//   });
// }

// function addToLocalStorage(todos) {
//   localStorage.setItem("todos", JSON.stringify(todos));
//   renderTodos(todos);
// }

// function getFromLocalStorage() {
//   const reference = localStorage.getItem("todos");
//   if (reference) {
//     todos = JSON.parse(reference);
//     renderTodos(todos);
//   }
// }

// function toggle(id) {
//   todos.forEach(function (item) {
//     if (item.id == id) {
//       item.completed = !item.completed;
//     }
//   });

//   addToLocalStorage(todos);
// }

// function deleteTodo(id) {
//   todos = todos.filter(function (item) {
//     return item.id != id;
//   });

//   addToLocalStorage(todos);
// }

// getFromLocalStorage();

// todoItemsList.addEventListener("click", function (event) {
//   if (event.target.type === "none") {
//     toggle(event.target.parentElement.getAttribute("data-key"));
//   }

//   if (event.target.classList.contains("delete-button")) {
//     deleteTodo(event.target.parentElement.getAttribute("data-key"));
//   }
// });
// var toDoList = document.getElementById("todoList"),
//   addButton = document.getElementById("addButton"),
//   listOfItems = document.getElementById("listOfItems"),
//   listOfItems = JSON.parse(localStorage.getItem("head-or-tails")) || [];

// function addList() {
//   let list = toDoList.value;
//   if (list === "") {
//     return (document.getElementById("list").innerHTML =
//       "you need to add todo list");
//   }
//   listOfItems.push({
//     todoList: list,
//   });
//   localStorage.setItem("todoList", JSON.stringify(list));
//   getList();
// }
// function getList() {
//   var list = "";
//   for (var i = 0; i < listOfItems.length; i++) {
//     list += "<li>";
//     list += listOfItems[i].value + " ";
//   }
//   document.getElementById("list").innerHTML = "";
//   const add = document.createElement("li");
//   add.innerHTML = `ToDoList: document.createElement("BUTTON")`;
//   listAdd.appendChild(add);
// }
// var detail = { name: "Annanomys", email: "annanomys@gmail.com", age: 20 };
// localStorage.setItem("Detail", JSON.stringify(detail));
// var storage = JSON.parse(localStorage.getItem("Detail") || defaultValue);
// console.log(detail);
