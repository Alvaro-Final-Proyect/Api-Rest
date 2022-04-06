const router = require('express').Router();

// middlewares
const getUser = require('./middlewares/getUser');

// routes
const createOne = require('./routes/createOne');
const deleteOne = require('./routes/deleteOne');
const getOne = require('./routes/getOne');
const updateOne = require('./routes/updateOne');
const getUserFromToken = require('./routes/getUserFromToken');

router.get('/getUserFromToken', getUserFromToken);
router.post('/', createOne);
router.delete('/:id', getUser, deleteOne);
router.get('/:id', getUser, getOne);
router.patch('/:id', getUser, updateOne);

module.exports = router;