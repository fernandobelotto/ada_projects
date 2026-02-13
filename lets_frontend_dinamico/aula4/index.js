fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    for (let i of data) {
      const ul = document.getElementById("lista");
      const li = document.createElement("li");
      li.innerText = i.name;
      ul.appendChild(li);
    }
  });


async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    for (let i of data) {
      const ul = document.getElementById("lista");
      const li = document.createElement("li");
      li.innerText = i.name;
      ul.appendChild(li);
    }

  } catch (err) {
    console.error(err);
  } finally {
    console.log('acabou!')
  }
}

getUsers();
