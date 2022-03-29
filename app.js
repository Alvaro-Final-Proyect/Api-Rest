const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
const logger = require('./routes/logger');
const auth = require('./middlewares/auth');
const login = require('./routes/login');
const register = require('./routes/register');
const indexRouter = require('./routes/index');
const usersRouter = require('./components/users');

app.use(logger);
app.use('/', indexRouter);
app.use('/login', login);
app.use('/register', register);

app.use(auth);

app.use('/api/users', usersRouter);

module.exports = app;