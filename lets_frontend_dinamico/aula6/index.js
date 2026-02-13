const url = "http://localhost:3000";

window.onload = startup;

const createButton = document.getElementById("create-button");
createButton.onclick = handleCreateTodo;

async function startup() {
  const res = await getTodos().catch(console.log);

  renderTodo(res);
  console.log(res);
}

function handleDeleteTodo(e) {
  deleteTodos(e.target.value)
    .then(() => {
      location.reload();
    })
    .catch(console.log);
}

function handleUpdateTodo(e) {
  const newTodo = {
    id: e.target.value,
    name: document.getElementsByName(e.target.value)[0].value,
  };

  updateTodos(e.target.value, newTodo)
    .then(() => {
      location.reload();
    })
    .catch(console.log);
}

function handleCreateTodo() {
  const todoName = document.getElementById("create-input").value;
  const todoId = (Math.random() * 10000).toFixed().toString();

  const todo = {
    name: todoName,
    id: todoId,
  };

  createTodos(todo)
    .then(() => {
      location.reload();
    })
    .catch(console.log);
}

async function getTodos() {
  return fetch(url + "/todos").then((res) => res.json());
}

async function updateTodos(id, todo) {
  return fetch(url + "/todos/" + id, {
    method: "PUT",
    body: JSON.stringify(todo),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

async function deleteTodos(id) {
  return fetch(url + "/todos/" + id, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

async function createTodos(todo) {
  return fetch(url + "/todos", {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

function renderTodo(todos) {
  const list = document.getElementById("todo-list");

  for (let todo of todos) {
    const li = document.createElement("li");
    li.value = todo.id;

    const input = document.createElement("input");
    input.name = todo.id;
    input.value = todo.name;

    const deleteButton = createDeleteButton(todo.id);
    const updateButton = createUpdateButton(todo.id);

    li.appendChild(input);
    li.appendChild(deleteButton);
    li.appendChild(updateButton);

    list.appendChild(li);
  }
}

function createDeleteButton(id) {
  const button = document.createElement("button");
  button.value = id;
  button.innerText = "delete";
  button.style.marginLeft = "10px";
  button.onclick = handleDeleteTodo;
  return button;
}

// TODO: abstract function to more generic one
function createUpdateButton(id) {
  const button = document.createElement("button");
  button.value = id;
  button.innerText = "atualizar";
  button.style.marginLeft = "10px";
  button.onclick = handleUpdateTodo;
  return button;
}
