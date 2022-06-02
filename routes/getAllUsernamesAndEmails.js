const user = require('../models/user');
const User = require('../models/user');

const getAllUsernamesAndEmails = async (request, response) => {
    try{
        const users = await User.find({}, 'username email');

        const usernames = [];
        const emails = [];

        users.forEach(user => {
            usernames.push(user.username);
            emails.push(user.email);
        });

        console.log(usernames, emails);

        response.json({'usernames': usernames, 'emails': emails});
    }catch(error){
        console.error(error.message);
        response.status(400).json({ message: error.message });
    }
}

module.exports = getAllUsernamesAndEmails;