const DoctorModel = require("../../DB/models/DoctorModel");

module.exports = async (req, res) => {
    try {
        const all = await DoctorModel.find({});
        res.status(200).json({
            success: true,
            msg: all
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
};
