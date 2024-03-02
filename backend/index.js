const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoModel = require("./toDo");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://ayushshivhare1003:ZdF8qehyE1mBQOO8@cluster0.qve4rac.mongodb.net/"
);

app.post("/add", (req, res) => {
  const task = req.body.task;
  todoModel
    .create({
      task: task,
    })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/get", (req, res) => {
  todoModel
    .find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.put("/update:id", (req, res) => {
  const { id } = req.params;
  todoModel
    .findByIdAndUpdate({ _id: id }, { done: true })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.delete("/delete:id", (req, res) => {
  const { id } = req.params;
  todoModel
    .findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(5000);
