const express = require('express');

const app = express();

app.use(express.json({limit: '200mb'}));
app.use(express.urlencoded({ extended: true, limit: '200mb' }));

// routers
const logger = require('./routes/logger');
const auth = require('./middlewares/auth');
const login = require('./routes/login');
const register = require('./routes/register');
const indexRouter = require('./routes/index');
const usersRouter = require('./components/users');
const matchesRouter = require('./components/matches');

app.use(logger);
app.use('/', indexRouter);
app.use('/login', login);
app.use('/register', register);

app.use(auth);

app.use('/api/users', usersRouter);
app.use('/api/matches', matchesRouter)

module.exports = app;