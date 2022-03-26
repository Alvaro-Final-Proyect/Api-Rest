const express = require('express');
const app = express();


// routers
const indexRouter = require('./routes/index');

app.use('/', indexRouter);

module.exports = app;