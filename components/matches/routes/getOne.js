const getOne = async(_, response) => {
    response.json(response.match);
}

module.exports = getOne;