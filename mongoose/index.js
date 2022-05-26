const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE_CONNECTION);
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));