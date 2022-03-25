const express = require('express');
const router = express.Router();

router.get('/', (_, response) => {
    response.send('Hello world');
});

module.exports = router;