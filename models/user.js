const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const options = { toJson: { virtuals: true} };
const emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

const userSchema = new mongoose.Schema({
    _id: { 
        type: ObjectId
    },
    username: { 
        type: String, 
        required: 'Name is required', 
        unique: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: 'Email is required', 
        unique: true, 
        trime: true,
        validate: value => emailRegEx.test(value)
    },
    name: {
        type: String,
        required: 'Name is required'
    },
    surname: {
        type: String,
        required: 'Surname is required'
    },
    password: { 
        type: String, 
        required: 'Password is required' 
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female'],
            message: '{VALUE} is not supported'
        },
        required: 'Gender is required',
        default: 'male'
    },
    level: {
        type: Number,
        required: 'Level is required'
    },
    position: {
        type: String,
        enum: {
            values: ['right', 'backhand', 'indifferent'],
            message: '{VALUE} is not supported'
        },
        required: 'Position is required',
        default: 'indifferent'
    },
    friends: [
        {
            type: ObjectId,
            ref: 'User'
        }
    ],
    friendsRequests: [
        {
            type: ObjectId,
            ref: 'User'
        }
    ],
    matchesInvitations: [
        { 
            type: ObjectId,
            ref: 'Match'
        }
    ],
    image: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, options);

module.exports = mongoose.model('User', userSchema);