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
// 1
var items = JSON.parse(localStorage.getItem("todo-list")) || [];
function addTodo() {
  var inputBox = document.querySelector("#todo-input");
  var item = inputBox.value;
  if (item === "")
    return (document.getElementById("list").innerHTML =
      "You need to put in a number");
  items.push({
    value: item,
  });

  localStorage.setItem("todo-list", JSON.stringify(items));

  listItems();

  inputBox.value = "";
}

function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

function markAsDone(index) {
  items[index].done = !items[index].done;
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

function listItems() {
  var list = "";
  for (var i = 0; i < items.length; i++) {
    list += "<li>";
    list += items[i].value + " ";
    list +=
      "<span onclick='deleteItem(" +
      i +
      ")'><button>Remove</button></span></li>";
  }
  document.querySelector("#todo-list").innerHTML = list;
}

(function () {
  listItems();
})();
