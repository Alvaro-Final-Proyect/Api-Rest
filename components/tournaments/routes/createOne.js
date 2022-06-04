const Tournament = require('../../../models/tournament');
const Match = require('../../../models/match');
const populater = require('../settings/populater');
const ObjectId = require('mongoose').Types.ObjectId;

const createMatch = async (date, minLevel, maxLevel) => {
    const match = new Match({
        _id: new ObjectId(),
        players: [null, null, null, null],
        minLevel: minLevel,
        maxLevel: maxLevel,
        date: date,
        isTournament: true
    });

    await match.save();
    return match._id;
}

const createOne = async (request, response) => {

    // TODO CREATE TOURNAMENT FROM DATE
    const startDate = new Date(request.body.startDate);
    const minLevel = request.body.minLevel;
    const maxLevel = request.body.maxLevel;

    if(!startDate || !minLevel || !maxLevel){
        return response.status(405).json({message: `Invalid params: ${startDate}, ${minLevel}, ${maxLevel}`});
    }

    let date = new Date();
    date.setDate(startDate.getDate());

    const roundOfSixteen = [];
    for(let i = 0; i < 8; i++){
        const id = await createMatch(date, minLevel, maxLevel);
        roundOfSixteen.push(id);
    }

    date.setDate(date.getDate() + 1);

    const quarterFinal = [];
    for(let i = 0; i < 4; i++){
        const id = await createMatch(date, minLevel, maxLevel);
        quarterFinal.push(id);
    }

    date.setDate(startDate.getDate() + 1);

    const semifinals = [];
    for(let i = 0; i < 2; i++){
        const id = await createMatch(date, minLevel, maxLevel);
        semifinals.push(id);
    }

    date.setDate(startDate.getDate() + 1);

    const final = await createMatch(date, minLevel, maxLevel);

    const tournament = new Tournament({
        _id: new ObjectId(),
        roundOfSixteen: roundOfSixteen,
        quarterFinal: quarterFinal,
        semifinals: semifinals,
        final: final,
    });

    try{
        const tournamentSaved = await tournament.save();
        const populated = await tournamentSaved.populate(populater);
        console.log(`tournament: ${populated}`);
        response.status(201).json(populated);
    }catch(error){
        console.log(error);
        response.status(400).json({message: error.message});
    }
}

module.exports = createOne;