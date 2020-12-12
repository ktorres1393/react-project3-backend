const express = require('express');
const router = express.Router();
const todoCtrl = require('../../controllers/todo');

router.get('/:id', todoCtrl.getTodo);
router.post('/save', todoCtrl.saveTodo);


module.exports = router;