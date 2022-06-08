const Tournament = require('../../../models/tournament');
const populater = require('../settings/populater');

const getAllTournaments = async (request, response) => {
    try{
        const tournaments = await Tournament.find().populate(populater);

        const currentDate = new Date(Date.now());
        const limit = new Date();

        limit.setDate(currentDate.getDate() - 3);

        const filteredTournaments = tournaments.filter(tournament => tournament.final.date > limit);
        return response.json(filteredTournaments);
    }catch(error){
        return response.status(500).json({ message: error.message });
    }
}

module.exports = getAllTournaments;
