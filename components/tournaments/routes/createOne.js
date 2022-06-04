const Tournament = require('../../../models/tournament');
const ObjectId = require('mongoose').Types.ObjectId;

const createOne = async (request, response) => {

    // TODO CREATE TOURNAMENT FROM DATE
    const startDate = request.params.startDate;

    const tournament = new Tournament({
        _id: new ObjectId(),
        roundOfSixteen: request.body.roundOfSixteen,
        quarterFinal: request.body.quarterFinal,
        semifinals: request.body.semifinals,
        final: request.body.final,
    });

    try{
        await tournament.save();
        response.status(201).json(tournament);
    }catch(error){
        response.status(400).json({message: error.message});
    }
}

module.exports = createOne;