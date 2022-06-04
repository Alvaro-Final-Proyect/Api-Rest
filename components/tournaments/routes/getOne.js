const getOne = (_, response) => {
    response.json(response.tournament);
}

module.exports = getOne;
