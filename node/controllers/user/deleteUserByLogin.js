/*

admin only <-
expected request [DEL] http://localhost:3000/api/user/delete/USERLOGIN
Headers - > token [admin]

*/


const UserModel = require("../../DB/models/UserModel");
const tokenVerificator = require("../../helpers/tokenVerificator");
const {secret} = require("../../constants/secret");
const constantRoles = require("../../constants/roles");
module.exports = async (req, res) => {
    try {
        const token = req.get('Authorization');
        const {roles} = tokenVerificator(token, secret);
        if (roles !== constantRoles.Admin) throw new Error("U have no rights to do this");
        if (await UserModel.countDocuments({"login": req.params.login}) < 1)
            throw new Error('No user with such login was found!');
        res.status(200).json(await UserModel.deleteOne({"login": req.params.login}));
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
};

