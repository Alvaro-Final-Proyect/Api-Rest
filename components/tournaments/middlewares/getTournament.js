const Tournament = require('../../../models/tournament');

const getTournament = async (request, response, next) => {
    let tournament;
    try{
        tournament = await Tournament.findById(request.params.id);
        if(!tournament){
            return response.status(404).json({ message: 'Cannot find tournament.' });
        }
    }catch(error) {
        return response.status(500).json({ message: error.message });
    }

    response.tournament = tournament;
    next();
}

module.exports = getTournament;
