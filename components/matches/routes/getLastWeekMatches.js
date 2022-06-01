const Match = require('../../../models/match');
const populater = require('../settings/populater');

const getLastWeekMatches = async (request, response) => {
    let matches;
    try{
        const currentDate = new Date(Date.now());
        const weekAgo = new Date();
        weekAgo.setDate(currentDate.getDate() - 7);

        matches = await Match.find({
            date: { $lt: currentDate.getTime(), $gt: weekAgo.getTime() }, 
            players: { $not: { $in: null } }
        }).populate({
            path: "players",
            model: "User",   
            select: "-password -image"
        });

        if(!matches){
            return response.status(404).json({ message: 'Matches were not found' });
        }
    }catch (error) {
        return response.status(500).json({ message: error.message });
    }

    response.json(matches);
}

module.exports = getLastWeekMatches;