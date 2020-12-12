const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const todoRouter = require('./routes/api/todo');

const app = express();


require('dotenv').config();

const scoresRouter = require('./routes/api/scores');
const usersRouter = require('./routes/api/users');


require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors()); // allows all origin to connect and not be blocked by browser


app.use('/api/scores', scoresRouter);
app.use('/api/users', usersRouter);
app.use('/api/todos', todoRouter);

const port = process.env.PORT || 3001; //dynamically assign a port when we deploy it 
	
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});