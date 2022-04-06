
const User = require('../../../models/user');

const getUserFromToken = async (request, response) => {
    let user;

    try{
        user = await User.findById(request.userId);
        if(!user){
            return response.status(404).json({ message: 'Cannot find user.' });
        }
    }catch(error){
        return response.status(500).json({ message: error.message });
    }

    response.user = user;
    response.user.password = "";
    response.json(response.user);
}

module.exports = getUserFromToken;