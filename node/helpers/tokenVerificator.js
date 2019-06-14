const jwt = require('jsonwebtoken');

module.exports = (token, secret) => {

    let user = null;

    if (!token || !secret) throw new Error('No token / secret');

    jwt.verify(token, secret, (err, decoded) => {
        if (err) throw new Error(err.message);
        user = {
            id: decoded.id,
            login: decoded.login,
            roles: decoded.roles
        };
    });
    if (!user) throw new Error('Something went wrong!');

    return user;
};
