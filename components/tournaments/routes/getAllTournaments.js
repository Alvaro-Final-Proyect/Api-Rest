const Tournament = require('../../../models/tournament');
const populater = require('../settings/populater');

const getAllTournaments = async (request, response) => {
    try{
        const tournaments = await Tournament.find().populate(populater);
        return response.json(tournaments);
    }catch(error){
        return response.status(500).json({ message: error.message });
    }
}

module.exports = getAllTournaments;
