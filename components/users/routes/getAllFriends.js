const User = require('../../../models/user');

const getAllFriends = async (request, response) => {
    console.log(request.userId);
    const user = await User.findById(request.userId);
    const userPopulated = await user.populate({
        path: "friends",
        model: "User",
    });
    response.json(userPopulated.friends);
}

module.exports = getAllFriends;