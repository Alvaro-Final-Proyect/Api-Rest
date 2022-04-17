const User = require('../../../models/user');

const sendFriendRequest = async (request, response) => {
    console.log("hello")
    const requestedUser = await User.findById(request.params.id);

    if(!requestedUser) {
        console.log(`User ${request.params.id} does not exists`);
        return response.status(`User ${request.params.id} does not exists`);
    }

    if(requestedUser.friendsRequests.includes(request.userId)){
        console.log(`You already have a pending request to this user.`);
        return response.status(400).json({ message:`You already have a pending request to this user.` });
    }

    if(requestedUser.friends.includes(request.userId)){
        console.log(`You already have a added this user`);
        return response.status(400).json({ message:`You already have a added this user`});
    }

    console.log(`ok`);
    requestedUser.friendsRequests.push(request.userId);    
    await requestedUser.save();
    response.json({message:"Friend requested"});
}

module.exports = sendFriendRequest;