const router = require('express').Router();

// middlewares
const getMatch = require('./middlewares/getMatch');

// routes
const setMatchResult = require('./routes/setMatchResult');
const createOne = require('./routes/createOne');
// const deleteOne = require('./routes/deleteOne');
const getOne = require('./routes/getOne');
// const updateOne = require('./routes/updateOne');
const getAllMatches = require('./routes/getAllMatches');
const joinToMatch = require('./routes/joinToMatch');
const leaveMatch = require('./routes/leaveMatch');
const getLastWeekMatches = require('./routes/getLastWeekMatches');

router.patch('/setMatchResult/:id&:winner', setMatchResult);
router.post('/', createOne);
// router.delete('/:id', getUser, deleteOne);
router.get('/getLastWeekMatches', getLastWeekMatches);
router.get('/:id', getMatch, getOne);
// router.patch('/:id', getUser, updateOne);
router.get('/', getAllMatches);
router.patch('/joinToMatch/:id&:index', joinToMatch);
router.patch('/leaveMatch/:id', leaveMatch);

module.exports = router;