const User = require('../../../models/user');
const bcrypt = require('bcrypt');
const ObjectId = require('mongoose').Types.ObjectId;

const createOne = async (request, response) => {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);

    const user = new User({
        _id: new ObjectId(),
        username: request.body.username,
        email: request.body.email,
        password: hashedPassword,
        name: request.body.name,
        surname: request.body.surname,
        gender: request.body.gender,
        level: request.body.level,
        position: request.body.position,
        friends: request.body.friends,
        friendsRequests: request.body.friendsRequests,
    });

    try{
        await user.save();
        user.password = '';
        response.status(201).json(user);
    }catch(error) {
        console.error(error.message);
        response.status(400).json({message: error.message});
    }
}

module.exports = createOne;