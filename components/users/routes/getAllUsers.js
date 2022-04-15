const User = require('../../../models/user');

const getAllUsers = async (request, response) => {
    let users;
    try{
        users = await User.find();
        if(!users){
            return response.status(404).json({ message: 'Users were not found' });
        }
    }catch (error) {
        return response.status(500).json({ message: error.message });
    }

    response.json(users);
}

module.exports = getAllUsers;