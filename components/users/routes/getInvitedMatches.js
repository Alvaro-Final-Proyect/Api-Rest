const User = require('../../../models/user');

const getInvitedMatches = async (request, response) => {
    const user = await User.findById(request.userId);
    const userPopulated = await user.populate({
        path: "matchesInvitations",
        model: "Match",
        populate: [{
            path: "players",
            model: "User",
            retainNullValues: true 
        }]
    }); 

    const matches = userPopulated.matchesInvitations;
    const filteredMatches = matches.filter((match) => {
        return match.date > Date.now();
    });
    
    response.json(filteredMatches);
}

module.exports = getInvitedMatches;