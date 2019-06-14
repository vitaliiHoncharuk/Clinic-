/*

admin only <-
expected request [POST] http://localhost:3000/api/doctor/
Headers - > token [admin]

Example of expected data :
{
	"name" : "mr.Doctor",
	"surname" : "Pupkin",
	"email": "anotherPipkin@gmail.com",
	"description":"Cool doctor CSI",
	"experience":"5",
	"floor":"3",
	"cabinet":"33",
	"workingDays": ["Monday","Tuesday","Friday"]
}

*/

const DoctorModel = require("../../DB/models/DoctorModel");
const tokenVerificator = require("../../helpers/tokenVerificator");
const {secret} = require("../../constants/secret");
const constantRoles = require("../../constants/roles");

module.exports = async (req, res) => {
    try {
        const token = req.get('Authorization');
        const {roles} = tokenVerificator(token, secret);
        if (roles !== constantRoles.Admin) throw new Error("U have no rights to do this");
        let {name, surname, email, description, experience, floor, cabinet, workingDays} = req.body;

        if (!name || !email || !description || !experience || !surname || !floor || !cabinet || !workingDays)
            throw new Error('Some field / fields is / are empty...');
        if (await DoctorModel.countDocuments({"email": email}) > 0) {
            throw new Error("User with such email was already registered.")
        }
        await DoctorModel.create({
            name,
            surname,
            email,
            description,
            experience,
            floor,
            cabinet,
            workingDays,
            roles: roles.Doctor
        });
        res.status(200).json({
            success: true,
            msg: `Successfully registered doctor ${name} ${surname} !`
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
};

