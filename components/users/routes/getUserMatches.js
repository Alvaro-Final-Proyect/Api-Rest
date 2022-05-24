const Match = require('../../../models/match');

const getUserMatches = async (request, response) => {
    const userId = request.userId;
    const matches = await Match.find({players: userId});

    response.json(matches);
}

module.exports = getUserMatches;