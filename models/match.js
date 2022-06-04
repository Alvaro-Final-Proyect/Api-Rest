const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const options = { toJson: { virtuals: true} };

const matchSchema = new mongoose.Schema({
    _id: { 
        type: ObjectId
    },
    players: {
        type: [
            { type: ObjectId, ref: 'User' }
        ],
        validate: [playersLimeit, '{PATH} the number of players must be 4']
    },
    minLevel: {
        type: Number,
        required: 'Min level is required'
    },
    maxLevel: {
        type: Number,
        required: 'Max level is required'
    },
    date: {
        type: Date,
        required: 'Date is required',
        validate: [dateCheck, '{PATH} must be on the future']
    },
    result: [
        [{ type: Number }],
        [{ type: Number }],
        [{ type: Number }],
    ],
    winner: { type: Number },
    isTournament: { type: Boolean, default: false },
}, options);

function playersLimeit(players) {
    return players.length === 4;
}

function dateCheck(date) { 
    return date.getTime() >= Date.now();
}

module.exports = mongoose.model('Match', matchSchema);