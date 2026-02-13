const form = document.getElementsByTagName("form")[0];


window.onload = function() {

  const items = window.localStorage.getItem('lista')

  if(items) {
    const ul = document.getElementById("lista-tarefas")
    ul.innerHTML = items
  }

  const buttons = document.getElementsByTagName('button')
  for (let button of buttons) {
    button.onclick = deletar
  }

}


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = serializeForm();

  const ul = document.getElementById("lista-tarefas");

  const li = document.createElement("li");

  li.className = "p-3 border-2 mt-2";

  li.innerText = data.name;

  const deleteButton = document.createElement("button");

  deleteButton.innerText = "Remover";
  deleteButton.className = "bg-red-700 ml-5 p-2 rounded-md text-white shadow-lg";

  const meuIdCriado = (Math.random() * 10000).toFixed().toString();

  li.id = meuIdCriado;

  deleteButton.value = meuIdCriado;
  deleteButton.onclick = deletar;

  li.appendChild(deleteButton);

  ul.appendChild(li);

  window.localStorage.setItem('lista', ul.innerHTML)
});

function deletar(event) {
  document.getElementById(event.target.value).remove();

  const ul = document.getElementById("lista-tarefas");

  window.localStorage.setItem('lista', ul.innerHTML)
}

function serializeForm() {
  const objeto = {};
  const formData = new FormData(form);

  for (const key of formData.keys()) {
    objeto[key] = formData.get(key);
  }

  return objeto;
}
