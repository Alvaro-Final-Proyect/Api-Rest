const Match = require('../../../models/match');
const User = require('../../../models/user');
const populater = require('../settings/populater');

const setMatchResult = async (request, response) => {
    let match;

    try{
        match = await Match.findById(request.params.id).select('-date');
        if(!match){
            return response.status(404).json({ message: 'Cannot find match.' });
        }
    }catch (error) {
        return response.status(500).json({ message: error.message });
    }

    const result = request.body.result;
    const winner = request.params.winner;

    match.result = result;
    match.winner = winner;

    const winners = match.players.slice(winner == 0 ? 0 : 2, winner == 0 ? 2 : 4);
    const losers = match.players.slice(winner == 0 ? 2 : 0, winner == 0 ? 4 : 2)

    try{
        winners.forEach(async (playerId) => {
            const player = await User.findById(playerId);
            player.level += 0.1;
            await player.save();
        });
        losers.forEach(async (playerId) => {
            const player = await User.findById(playerId);
            player.level -= 0.1;
            await player.save();
        });

    }catch(e){
        console.log(e);
    }

    await match.save();
    response.json({mesage: 'Match saved'});
}

module.exports = setMatchResult;