const todoModel = require("../models/todomodel");

module.exports.getTodos = async (req, res) => {
  const todos = await todoModel.find();
  res.send(todos);
};

module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;

  todoModel.create({ text }).then((data) => {
    console.log("Added succesfully...");
    res.send(data);
  })
  .catch((err) => console.log(err));
};

module.exports.updateTodo = async (req, res) => {
  const {_id, text } = req.body;
  todoModel
    .findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated succesfully..."))
    .catch((err) => console.log(err));
};

module.exports.deleteTodo = async (req, res) => {
  const {_id} = req.body;
  todoModel
    .findByIdAndDelete(_id)
    .then(() =>{
      res.send("Deleted succesfully...")})
    .catch((err) => console.log(err));
};
