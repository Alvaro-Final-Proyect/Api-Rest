const router = require('express').Router();

const createOne = require('./routes/createOne');
const deleteOne = require('./routes/deleteOne');
const getOne = require('./routes/getOne');

router.post('/', createOne);
// router.delete('/:id', deleteOne);
// router.get('/:id', getOne);

module.exports = router;