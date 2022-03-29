const services = require('../services');

function isAuth(request, response, next){
    if(!request.headers.authorization){
        console.log('Authentication failed, token is missing');
        return response.status(401).send({ message: "Token is missing" });
    }

    const token = request.headers.authorization;
    
    services.decodeToken(token).then(res => {
        request.userId = res;
        next();
    }).catch(error => {
        console.log(error.message);
        response.status(error.status).send(error.message);
    });
}

module.exports = isAuth;