const CompanySettings = require('../../../models/companySettings');

const getCompanySettings = async (request, response, next) => {
    let companySettings;
    try{
        companySettings = await CompanySettings.findOne();
        console.log(companySettings);

        if(!companySettings){
            return response.status(404).json({ message: 'Cannot find company.' });
        }
    }catch (error) {
        return response.status(500).json({ message: error.message });
    }

    response.companySettings = companySettings;
    next();
}

module.exports = getCompanySettings;