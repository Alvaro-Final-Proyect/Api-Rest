const Match = require('../../../models/match');
const populater = require('../settings/populater');

const leaveMatch = async (request, response) => {
    const userId = request.userId; 

    let match;
    try{
        match = await Match.findById(request.params.id);
        if(!match){
            return response.status(404).json({ message: 'Cannot find match.' });
        }
    }catch (error) {
        return response.status(500).json({ message: error.message });
    }

    const index = match.players.indexOf(userId)

    if(index === -1){
        return response.status(410).json({ message:'User is not in match' });
    }

    match.players[index] = null;
    match.save();
    response.json(await match.populate(populater));
}

module.exports = leaveMatch;