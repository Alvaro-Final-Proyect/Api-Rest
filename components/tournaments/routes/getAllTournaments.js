const Tournament = require('../../../models/tournament');

const getAllTournaments = async (request, response) => {
    try{
        const tournaments = await Tournament.find();
        return response.json(tournaments);
    }catch(error){
        return response.status(500).json({ message: error.message });
    }
}

module.exports = getAllTournaments;
