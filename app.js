const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
const indexRouter = require('./routes/index');
const usersRouter = require('./components/users');

app.use('/', indexRouter);
app.use('/api/users', usersRouter);

module.exports = app;