const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const todos = {
  asdf: { name: "tarefa teste", id: "asdf" },
};

app.get("/todos", (_req, res) => {
  res.json(Object.values(todos));
});

app.post("/todos", (req, res) => {
  const todo = req.body;

  todos[todo.id] = todo;

  res.json({});
});

app.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  delete todos[todoId];
  res.json({});
});

app.put("/todos/:id", (req, res) => {
  const todo = req.body;
  const todoId = req.params.id;
  todos[todoId] = todo;
  res.json({});
});

app.get("/", (_req, res) => {
  res.json({ status: "success!" });
});

app.listen(3000, () => {
  console.log("server listening on http://localhost:3000");
});
