const Match = require('../../../models/match');
const populater = require('../settings/populater');

const getMatch = async (request, response, next) => {
    let match;
    try{
        match = await Match.findById(request.params.id).populate(populater);
        if(!match){
            return response.status(404).json({ message: 'Cannot find match.' });
        }
    }catch (error) {
        return response.status(500).json({ message: error.message });
    }

    response.match = match;
    next();
}

module.exports = getMatch;