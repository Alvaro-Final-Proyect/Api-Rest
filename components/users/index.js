const router = require('express').Router();

// middlewares
const getUser = require('./middlewares/getUser');

// routes
const createOne = require('./routes/createOne');
const deleteOne = require('./routes/deleteOne');
const getOne = require('./routes/getOne');
const updateOne = require('./routes/updateOne');
const getUserFromToken = require('./routes/getUserFromToken');
const getAllUsers = require('./routes/getAllUsers');
const sendFriendRequest = require('./routes/sendFriendRequest');
const acceptFriendRequest = require('./routes/acceptFriendRequest');
const removeFriend = require('./routes/removeFriend');

router.get('/getUserFromToken', getUserFromToken);
router.post('/', createOne);
router.delete('/:id', getUser, deleteOne);
router.get('/:id', getUser, getOne);
router.patch('/:id', getUser, updateOne);
router.get('/', getAllUsers);
router.patch('/sendFriendRequest/:id', sendFriendRequest);
router.patch('/acceptFriendRequest/:id', acceptFriendRequest);
router.patch('/removeFriend/:id', removeFriend);

module.exports = router;