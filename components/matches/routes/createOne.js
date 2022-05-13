const Match = require('../../../models/match');
const populater = require('../settings/populater');
const ObjectId = require('mongoose').Types.ObjectId;

const createOne = async (request, response) => {
    const match = new Match({
        _id: new ObjectId(),
        players: request.body.players,
        minLevel: request.body.minLevel,
        maxLevel: request.body.maxLevel,
        date: new Date(request.body.date)
    });

    try{
        await match.save();
        response.status(201).json(await match.populate(populater));
    }catch(error) {
        console.error(error.message);
        response.status(400).json({message: error.message});
    }
}

module.exports = createOne;