/*

admin only <-
expected request [GET] http://localhost:3000/api/section/SECTIONNAME


*/

const SectionModel = require("../../DB/models/SectionModel");
module.exports = async (req, res) => {
    try {
        const sectionName  = req.url.substring(1);
        console.log(sectionName);
        let sectionsWithDoctors =
            await SectionModel
                .find({"sectionName" : sectionName}).populate({path: 'doctorId', model :'Doctors'});
        res.status(200).json({
            success: true,
            msg: sectionsWithDoctors
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
};
