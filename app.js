const express = require('express');

const app = express();

app.use(express.json({limit: '200mb'}));
app.use(express.urlencoded({ extended: true, limit: '200mb' }));

// routers
const logger = require('./routes/logger');
const auth = require('./middlewares/auth');
const login = require('./routes/login');
const register = require('./routes/register');
const getAllUsernamesAndEmails = require('./routes/getAllUsernamesAndEmails');
const indexRouter = require('./routes/index');
const usersRouter = require('./components/users');
const matchesRouter = require('./components/matches');
const companySettingsRouter = require('./components/company');
const tournamentsRouter = require('./components/tournaments');

app.use(logger);
app.use('/', indexRouter);
app.use('/login', login);
app.use('/register', register);
app.use('/getAllUsernamesAndEmails', getAllUsernamesAndEmails);

app.use(auth);

app.use('/api/users', usersRouter);
app.use('/api/matches', matchesRouter);
app.use('/api/companySettings', companySettingsRouter);
app.use('/api/tournaments', tournamentsRouter);

module.exports = app;