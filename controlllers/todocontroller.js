const todoModel = require("../models/todomodel");

module.exports.getTodos = async (req, res) => {
  const todos = await todoModel.find();
  res.send(todos);
};

module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;

  todoModel.create({ text }).then((data) => {
    console.log("Added succesfully...");
    console.log(data);
    res.send(data);
  });
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
    .then(({data}) =>{
      console.log("Data-> ", data);
      res.send("Deleted succesfully...")})
    .catch((err) => console.log(err));
};
