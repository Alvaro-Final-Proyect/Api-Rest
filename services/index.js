const jwt = require('jwt-simple');
const moment = require('moment');

function createToken(user) {
    const payload = {
        sub: user._id.toString(),
        iat: moment().unix(),
        exp: moment().add(15, 'days').unix()
    }

    return jwt.encode(payload, '123465789');
}

function decodeToken(token) {
    const decoded = new Promise((resolve, reject) => {
        try{
            const payload = jwt.decode(token, '123465789');

            if(payload.exp <= moment().unix()){
                reject({
                    status: 401,
                    message: 'The token has expired!'
                });
            }
            
            resolve(payload.sub);
        }catch(error){
            reject({
                status: 500,
                message: 'Invalid token'
            });
        }
    });

    return decoded;
}

module.exports = {
    createToken,
    decodeToken
};