const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const comments = {
  asdf: [{ content: "asdf", id: "1234", postId: "asdf", status: "approved" }],
};

app.get("/posts/:id/comments", (req, res) => {
  const postId = req.params.id;

  res.json(comments[postId]);
});

app.post("/posts/:id/comments", async (req, res) => {
  const postId = req.params.id;

  const { content } = req.body;
  const commentId = (Math.random() * 10_000).toFixed(0).toString();

  const commentsArray = comments[req.params.id] || [];

  const comment = {
    content,
    id: commentId,
    postId,
    status: "pending",
  };

  commentsArray.push(comment);

  comments[postId] = commentsArray;

  await axios
    .post("http://localhost:4005/events", {
      data: comment,
      type: "CommentCreated",
    })
    .then(() => console.log("Evento CommentCreated enviado"))
    .catch(() => console.log("erro ao enviar evento CommentCreated"));

  res.status(201).json({});
});

app.get("/comments", (req, res) => {
  res.json(comments);
});
app.get("/", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/events", async (req, res) => {
  const eventType = req.body.type;

  console.log(`evento ${eventType} recebido`);

  if (eventType === "CommentModerated") {
    const commentUpdated = req.body.data;

    const listaDeComentariosAtualizada = comments[commentUpdated.postId].map(
      (comment) => {
        if (comment.id === commentUpdated.id) {
          return commentUpdated;
        }
        return comment;
      }
    );

    comments[commentUpdated.postId] = listaDeComentariosAtualizada;

    console.log("comentário moderado foi atualizado!");
    // enviar um evento de CommentUpdated

    await axios
      .post("http://localhost:4005/events", {
        data: commentUpdated,
        type: "CommentUpdated",
      })
      .then(() => console.log("enviando evento CommentUpdated"))
      .then(() => console.log("erro ao enviar evento CommentUpdated"));
  }

  res.json({});
});

app.listen(4001, () => {
  console.log("comments service running at http://localhost:4001");
});
