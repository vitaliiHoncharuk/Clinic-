/*

expected request [GET] http://localhost:3000/api/doctor/DOCTORID

*/


const DoctorModel = require("../../DB/models/DoctorModel");

module.exports = async (req, res) => {
    try {
        if (req.params.id === "") throw new Error("String is empty");
        const Doctor = await DoctorModel.find({_id:req.params.id});
        res.status(200).json({
            success: true,
            msg: Doctor
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
};
