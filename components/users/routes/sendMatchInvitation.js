const User = require('../../../models/user');
const Match = require('../../../models/match');

const sendMatchInvitation = async (request, response) => {
    const matchId = request.params.matchId
    const userInvitedId = request.params.userInvitedId;
    const match = await Match.findById(matchId)
    const userInvited = await User.findById(userInvitedId);

    if(!match) {
        console.log(`Match not found`);
        return response.status(404).json({ error: 'Match not found' });
    }

    if(!userInvited) {
        console.log(`User invited not found`);
        return response.status(400).json({ error:`You already have a pending request to this user.` });
    }

    if(match.players.includes(userInvitedId)) {
        console.log(`User already in match`);
        return response.status(400).json({ error:`User already in match` });
    }

    if(userInvited.matchesInvitations.includes(matchId)) {
        console.log(`User already invited to match`);
        return response.status(400).json({ error:`User already invited to match` });
    }

    userInvited.matchesInvitations.push(matchId);    
    await userInvited.save();
    console.log("ok");
    response.json({message:"User invited"});
}

module.exports = sendMatchInvitation;