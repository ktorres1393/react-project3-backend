const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: String,
  userId: String,
  
}, {
  timestamps: true
});



module.exports = mongoose.model('Todo', todoSchema);

