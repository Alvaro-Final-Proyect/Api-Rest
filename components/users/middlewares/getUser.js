const User = require('../../../models/user');
const ObjectId = require('mongoose').Types.ObjectId;

const getUser = async (request, response, next) => {
    let user;
    try{
        user = await User.findById(request.params.id);
        if(!user){
            return response.status(404).json({ message: 'Cannot find user.' });
        }
    }catch (error) {
        return res.status(500).json({ message: error.message });
    }

    response.user = user;
    next();
}

module.exports = getUser;