const router = require('express').Router();

// middlewares
const getCompanySettings = require('./middlewares/getCompanySettings');

// routes
const createOne = require('./routes/createOne');
const getOne = require('./routes/getOne');
const updateOne = require('./routes/updateOne');

router.get('/', getCompanySettings, getOne);
router.post('/', createOne);
router.patch('/', getCompanySettings, updateOne);

module.exports = router;