/*

expected request [GET] http://localhost:3000/api/doctor/


example of expected data :
{
	"name" : "mr.Doctor"
}

*/

const DoctorModel = require("../../DB/models/DoctorModel");

module.exports = async (req, res) => {
    try {
        if (req.body.name === "") throw new Error("String is empty");
        const User = await DoctorModel.find({
            'name': {
                $regex: new RegExp(req.body.name, 'i')
            }
        });
        res.status(200).json({
            success: true,
            msg: User
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
};
