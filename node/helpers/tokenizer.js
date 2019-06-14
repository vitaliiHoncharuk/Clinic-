const jwt = require('jsonwebtoken');
const {secret, passSecret} = require('../constants/secret');

module.exports = (id, login, roles) => {
    const accessToken = jwt.sign({id, roles}, secret, {expiresIn: 86400});
    const refreshToken = jwt.sign({login, roles, id}, passSecret, {expiresIn: 600});
    if (!accessToken || !refreshToken) throw new Error('Error with tokens!');
    return {accessToken, refreshToken};
};
