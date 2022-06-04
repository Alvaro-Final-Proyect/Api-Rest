const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const options = { toJson: { virtuals: true} };

const validateRoundOfSixteen = (matches) => matches.length === 8 && !matches.some((match) => match == null); 
const validateQuarterFinals = (matches) => matches.length === 4;
const validateSemifinals = (matches) => matches.length === 2; 
const validateWinners = (players) => players.length === 2;

const tournamentSchecma = new mongoose.Schema({
    _id: { 
        type: ObjectId
    },
    roundOfSixteen: { 
        type: [{type: ObjectId, ref: 'Match'}],
        validate: [validateRoundOfSixteen, '{PATH} the number of matches must be 8'],
        required: true,
    },
    quarterFinal: {
        type: [{ type: ObjectId, ref: 'Match'}],
        validate: [validateQuarterFinals, '{PATH} the number of matches must be 4'],
        required: true,
    },
    semifinals: {
        type: [{ type: ObjectId, ref: 'Match'}],
        validate: [validateSemifinals, '{PATH} the number of matches must be 2'],
        required: true,
    },
    final: {
        type: ObjectId, 
        ref: 'Match',
        required: true,
    }, 
}, options);

module.exports = mongoose.model('Tournament', tournamentSchecma);