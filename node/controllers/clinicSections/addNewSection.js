/*

admin only <-
expected request [POST] http://localhost:3000/api/section/
Headers - > token [admin]
example of expected data :

{
	"sectionName" : "Surgery"
}


*/


const tokenVerificator = require("../../helpers/tokenVerificator");
const {secret} = require("../../constants/secret");
const constantRoles = require("../../constants/roles");
let SectionModel = require("../../DB/models/SectionModel");
module.exports = async (req, res) => {
    try {
        const token = req.get('Authorization');
        const {roles} = tokenVerificator(token, secret);
        if (roles !== constantRoles.Admin) throw new Error("U have no rights to do this");
        if (await SectionModel.find({"sectionName": req.body.sectionName}) === []) {
            throw new Error("Section already exists");
        }
        const {sectionName} = req.body;
        await SectionModel.create({
            sectionName
        });
        res.status(200).json({
            success: true,
            msg: `Successfully added ${sectionName} to Clinic Sections!`
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
};



