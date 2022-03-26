const getOne = async(_, response) => {
    response.user.password = "";
    response.json(response.user);
}

module.exports = getOne;