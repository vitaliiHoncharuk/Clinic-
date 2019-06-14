/*

admin only <-
expected request [PUT] http://localhost:3000/api/section/
Headers - > token [admin]

example of expected data :

{
	"sectionName":"Surgery",
	"doctorId" : "5cff92575024c01ca5d0fa48"
}


*/


const SectionModel = require("../../DB/models/SectionModel");
const tokenVerificator = require("../../helpers/tokenVerificator");
const {secret} = require("../../constants/secret");
let constantRoles = require("../../constants/roles");
module.exports = async (req, res) => {
    try {
        const token = req.get('Authorization');
        const {roles} = tokenVerificator(token, secret);
        if (roles !== constantRoles.Admin) throw new Error("U have no rights to do this");
        const {doctorId, sectionName} = req.body;
        const updateClinic =
            await SectionModel
                .findOneAndUpdate(
                    {
                        'sectionName': sectionName
                    },
                    {
                        $push: {'doctorId': doctorId}
                    }
                    );
        console.log(updateClinic);
        res.status(200).json({
            success: true,
            msg: `Successfully added doctor to Clinic ${sectionName} Section`
        });
    } catch (err) {

        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
};
