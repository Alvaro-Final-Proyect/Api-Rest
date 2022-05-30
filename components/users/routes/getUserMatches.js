const Match = require('../../../models/match');

const getUserMatches = async (request, response) => {
    const userId = request.userId;
    let matches = await Match.find({players: userId, date: {$lt: Date.now()} }).populate({
        path: "players",
        model: "User",
        retainNullValues: true 
    });

    matches = matches.filter(match => !match.players.some(player => player == null));

    response.json(matches);
}

module.exports = getUserMatches;