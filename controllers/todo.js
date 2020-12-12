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

  module.exports = {
      getTodo,
      saveTodo
    }

    //changing query for mongoDb| updating and deleting todo.update todo.remove