const updateOne = async (request, response) => {  
    if(request.body.matchPrice) response.companySettings.matchPrice = request.body.matchPrice;

    try{
        const updatedCompanySettings = await response.companySettings.save();
        response.json(updatedCompanySettings);
    }catch(error){
        response.status(400).json({ message: error.message });
    }
}

module.exports = updateOne;