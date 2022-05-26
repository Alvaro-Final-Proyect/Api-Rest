const Match = require('../../../models/match');

const getUserMatches = async (request, response) => {
    const userId = request.userId;
    const matches = await Match.find({players: userId}).populate({
        path: "players",
        model: "User",
        retainNullValues: true 
    });

    response.json(matches);
}

module.exports = getUserMatches;