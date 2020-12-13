const Todo = require('../models/todos');

async function getTodo(req, res) {

       const results = await Todo.find({userId:req.params.id});
   
      res.json(results)

  }

 async function saveTodo (req, res){
    const todo = new Todo({title: req.body.title, userId: req.body.userId});
    
    const results = await todo.save();

    res.json(results)
 }

async function updateTodo(req, res ){
    const todoId = req.body.todoId;
    const todoTitle = req.body.todoTitle;

    const results = await Todo.updateOne({_id: todoId}, {title: todoTitle})

    console.log(req.body)

    res.json(results)
 }

 async function getTodoById(req, res) {

   const results = await Todo.findOne({_id:req.params.id});

  res.json(results)

}

async function deleteTodo(req, res ){
   const todoId = req.body.todoId;
   
   const results = await Todo.deleteOne({_id: todoId});

   res.json(results)
}

  module.exports = {
      getTodo,
      saveTodo,
      updateTodo,
      getTodoById,
      deleteTodo
    }

    //changing query for mongoDb| updating and deleting todo.update todo.remove