const User = require('../../../models/user');

const removeFriend = async (request, response) => {
    const user = await User.findById(request.userId);
    const friend = await User.findById(request.params.id);

    if(!friend){
        return response.status(400).json({message: `User ${friend.id} does not exists`});
    }

    let index = user.friends.indexOf(friend.id);
    if(index != -1){
        user.friends.splice(index, 1);
    }

    index = friend.friends.indexOf(user.id);
    if(index != -1){
        friend.friends.splice(index, 1);
    }

    user.save();
    friend.save();

    response.json(user);
}

module.exports = removeFriend;