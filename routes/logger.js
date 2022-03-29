const log = (request, response, next) => {
    console.log(request.path);
    next();
}

module.exports = log;