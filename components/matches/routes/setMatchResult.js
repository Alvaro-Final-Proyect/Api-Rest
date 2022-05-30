const Match = require('../../../models/match');
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

    await match.save();
    response.json({mesage: 'Match saved'});
}

module.exports = setMatchResult;