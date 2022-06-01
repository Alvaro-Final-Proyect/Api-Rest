const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const options = { toJson: { virtuals: true} };

const companySettingsSchema = new mongoose.Schema({
    _id: { 
        type: ObjectId
    },
    matchPrice: { type: Number },
}, options);

module.exports = mongoose.model('CompanySettings', companySettingsSchema);