const CompanySettings = require('../../../models/companySettings');
const ObjectId = require('mongoose').Types.ObjectId;

const createOne = async (request, response) => {

    const company = new CompanySettings({
        _id: new ObjectId(),
        matchPrice: request.body.matchPrice,
    });

    try{
        await company.save();
        response.status(201).json(company);
    }catch(error) {
        response.status(400).json({message: error.message});
    }
}

module.exports = createOne;