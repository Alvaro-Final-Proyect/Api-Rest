const Match = require('../../../models/match');

const getAllMatches = async (request, response) => {
    let matches;
    try{
        matches = await Match.find();
        if(!matches){
            return response.status(404).json({ message: 'Matches were not found' });
        }
    }catch (error) {
        return response.status(500).json({ message: error.message });
    }

    response.json(matches);
}

module.exports = getAllMatches;