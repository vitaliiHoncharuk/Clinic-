/*

admin only <-
expected request [POST] : http://localhost:3000/api/rate
Headers - > token [user]

example:
{
    "data": 5,
    "id":"5d00d05d8c77090d4d4886a3"    -<
}

*/
const StarModel = require("../../DB/models/StarModel");
const tokenVerificator = require("../../helpers/tokenVerificator");
const {secret} = require("../../constants/secret");
const constantRoles = require("../../constants/roles");


module.exports = async (req, res) => {
    try {
        const token = req.get('Authorization');
        const {id, roles} = tokenVerificator(token, secret);
        const doctorId = req.body.id;

        if (await StarModel.countDocuments({"userId": id}) > 0 && roles !== constantRoles.Doctor) {
            throw new Error("You are not allowed to do this!")
        }

        await StarModel.create({
            stars: req.body.data,
            doctorId: doctorId,
            userId: id
        });

        res.status(200).json({
            success: true,
            msg: "OK!"
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
};

