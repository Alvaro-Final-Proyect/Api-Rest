const router = require('express').Router();

// middlewares
// const getUser = require('./middlewares/getUser');

// routes
const createOne = require('./routes/createOne');
// const deleteOne = require('./routes/deleteOne');
// const getOne = require('./routes/getOne');
// const updateOne = require('./routes/updateOne');
const getAllMatches = require('./routes/getAllMatches');
const joinToMatch = require('./routes/joinToMatch');

router.post('/', createOne);
// router.delete('/:id', getUser, deleteOne);
// router.get('/:id', getUser, getOne);
// router.patch('/:id', getUser, updateOne);
router.get('/', getAllMatches);
router.patch('/joinToMatch/:id&:index', joinToMatch);

module.exports = router;