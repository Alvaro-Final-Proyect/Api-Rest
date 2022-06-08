const Match = require('../../../models/match');
const populater = require('../settings/populater');

const joinToMatch = async (request, response) => {
    const userId = request.userId; 
    const index = request.params.index;

    let match;
    try{
        match = await Match.findById(request.params.id, '-date');
        if(!match){
            return response.status(404).json({ message: 'Cannot find match.' });
        }
    }catch (error) {
        return response.status(500).json({ message: error.message });
    }

    if(!index || index < 0 || index > 3) {
        return response.status(405).json({ message: 'Index out of range'});
    }

    if(match.players[index]){
        return response.status(407).json({ message:'Position already occupied' });
    }

    if(match.players.includes(userId)){
        return response.status(406).json({ message:'User already in match' });
    }

    match.players[index] = userId;
    await match.save();
    response.json(await Match.findById(request.params.id).populate(populater));
}

module.exports = joinToMatch;