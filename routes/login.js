const User = require('../models/user');
const bcrypt = require('bcrypt');
const services = require('../services');

const login = (request, response) => {
    const usernameOrEmail = request.body.username;

    User.findOne(
        { 
            $or: [
                { 'username': { $regex : new RegExp(usernameOrEmail, "i") } },
                { 'email': { $regex : new RegExp(usernameOrEmail, "i") } }
            ]
        },
        async (error, user) => {
            if(error) return response.status(500).send({ message: error });
            if(!user) return response.status(404).send({ message: 'User not found' });
            request.user = user;
            if(!await bcrypt.compare(request.body.password, user.password)){
                return response.status(401).json({ message: 'Invalid password' });
            }

            response.status(200).send({
                message: `You logged in correctly, welcome ${user.name}`,
                token: services.createToken(user)
            });
        }
    );
}

module.exports = login;