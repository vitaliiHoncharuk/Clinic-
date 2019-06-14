/*

admin only <-
expected request [GET] : http://localhost:3000/api/user/all
Headers - > token [admin]

*/

const UserModel = require("../../DB/models/UserModel");
const tokenVerificator = require("../../helpers/tokenVerificator");
const {secret} = require("../../constants/secret");
const constantRoles = require("../../constants/roles");

module.exports = async (req,res) => {
    try {
        const token = req.get('Authorization');
        const {id,roles} = tokenVerificator(token,secret);
        console.log(id + "id");
        console.log(roles+"roles");
        if (roles !== constantRoles.Admin) throw new Error("U have no rights to do this");
            const allUsers = await UserModel.find({});
            res.status(200).json({
                success: true,
                msg: allUsers
            });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
};

