
// [POST] http://localhost:3000/api/auth/admin

const tokenizer = require('../../helpers/tokenizer');
const AdminModel = require("../../DB/models/AdminModel");


module.exports = async (req, res) => {
    try {
        const {login = '', password = ''} = req.body;
        if (!login || !password) throw new Error('No login / password !');

        const currentAdmin = await AdminModel.findOne({
            "login":login,
            "password":password
        });


        if (!currentAdmin) throw new Error('Wrong login / password or you are not registered!');

        const {adminLogin = login,roles,id} = currentAdmin;
        const {accessToken} = tokenizer(id,adminLogin,roles);

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
