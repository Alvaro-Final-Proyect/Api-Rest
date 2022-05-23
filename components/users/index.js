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
const getAllFriends = require('./routes/getAllFriends');
const sendMatchInvitation = require('./routes/sendMatchInvitation');

router.get('/getAllFriends', getAllFriends);
router.get('/getUserFromToken', getUserFromToken);
router.get('/:id', getUser, getOne);
router.get('/', getAllUsers);

router.patch('/sendMatchInvitation/:matchId&:userInvitedId', sendMatchInvitation);
router.patch('/sendFriendRequest/:id', sendFriendRequest);
router.patch('/acceptFriendRequest/:id', acceptFriendRequest);
router.patch('/removeFriend/:id', removeFriend);
router.patch('/:id', getUser, updateOne);

router.post('/', createOne);
router.delete('/:id', getUser, deleteOne);

module.exports = router;