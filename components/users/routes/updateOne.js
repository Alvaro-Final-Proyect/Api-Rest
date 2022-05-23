const bcrypt = require('bcrypt');

const updateOne = async (request, response) => {  
    if(request.body.username) response.user.username = request.body.username;
    if(request.body.email) response.user.email = request.body.email;
    if(request.body.name) response.user.name = request.body.name;
    if(request.body.surname) response.user.surname = request.body.surname;
    if(request.body.password) response.user.password = await bcrypt.hash(request.body.password, 10);
    if(request.body.gender) response.user.gender = request.body.gender;
    if(request.body.level) response.user.level = request.body.level;
    if(request.body.position) response.user.position = request.body.position;
    if(request.body.friends) response.user.friends = request.body.friends;
    if(request.body.friendsRequest) response.user.friendsRequest = request.body.friendsRequest;

    try{
        const updatedUser = await response.user.save();
        updatedUser.password = '';
        response.json(updatedUser);
    }catch(error){
        response.status(400).json({ message: error.message });
    }
}

module.exports = updateOne;