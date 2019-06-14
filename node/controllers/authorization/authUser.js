// [POST] http://localhost:3000/api/auth/user

const tokenizer = require('../../helpers/tokenizer');
const UserModel = require("../../DB/models/UserModel");


module.exports = async (req, res) => {
    try {
        const {login = '', password = ''} = req.body;
       if (!login || !password) throw new Error('No login / password !');

        const currentUser = await UserModel.findOne({
           "login":login,
            "password":password
        });


        if (!currentUser) throw new Error('Wrong login / password or you are not registered!');
        const {id, userLogin=login,roles } = currentUser;
        const {accessToken} = tokenizer(id, userLogin,roles);
        
        res.json({
            success: true,
            msg: accessToken
        })
    }

    catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};
