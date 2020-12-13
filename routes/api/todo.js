const express = require('express');
const router = express.Router();
const todoCtrl = require('../../controllers/todo');

router.get('/:id', todoCtrl.getTodo);
router.post('/save', todoCtrl.saveTodo);
router.put('/edit', todoCtrl.updateTodo);
router.get('/id/:id', todoCtrl.getTodoById);
router.delete('/delete', todoCtrl.deleteTodo);


module.exports = router;