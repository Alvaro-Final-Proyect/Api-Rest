const getOne = async(_, response) => {
    response.json(response.companySettings);
}

module.exports = getOne;