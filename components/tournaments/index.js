const router = require('express').Router();

// middlewares
const getTournament = require('./middlewares/getTournament');

// routes
const getOne = require('./routes/getOne');
const getAllTournaments = require('./routes/getAllTournaments');
const createOne = require('./routes/createOne');

router.get('/:id', getTournament, getOne);
router.get('/', getAllTournaments);

router.post('/', createOne);

module.exports = router;