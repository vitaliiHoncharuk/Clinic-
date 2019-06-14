/*

expected request [GET] http://localhost:3000/api/comment/DOCTORID

*/

const CommentModel = require("../../DB/models/CommentModel");

module.exports = async (req, res) => {
    try {
        if (await CommentModel.find({doctorId: req.params.id}) === []){
            throw new Error("Doctor has no comments.")
        }
        const comments = await
            CommentModel
                .find({doctorId: req.params.id})
                .populate({path: 'userId', select: {'name': 1, 'Surname': 1, "_id": 0}})
                .select({"name":1 ,"comment":1,"_id":0});
        res.status(200).json({
            success: true,
            msg: comments
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
};

