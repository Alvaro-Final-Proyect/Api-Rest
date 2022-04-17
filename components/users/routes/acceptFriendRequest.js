const User = require('../../../models/user');

const acceptFriendRequest = async (request, response) => {
    const user = await User.findById(request.userId);
    const acceptedUser = await User.findById(request.params.id);

    let index = user.friendsRequests.indexOf(acceptedUser.id);
    if(index != -1) {
        user.friendsRequests.splice(index, 1);
        user.friends.push(acceptedUser.id);
        user.save();
    }else{
        return response.status(400).json({message:`You dont have a friend request from ${user.id}`});
    }

    index = acceptedUser.friendsRequests.indexOf(user.id);
    if(index != -1){
        acceptedUser.friendsRequests.splice(index, 1);
    }

    acceptedUser.friends.push(user.id);
    acceptedUser.save();

    response.json(user);
}

module.exports = acceptFriendRequest;