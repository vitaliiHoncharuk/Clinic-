/*
 [COMMENTS SORTED BY DATE]
expected request [GET] http://localhost:3000/api/comment/

*/
const CommentModel = require("../../DB/models/CommentModel");

module.exports = async (req, res) => {
    try {
        const comments = await
            CommentModel
                .find()
                .select({'id':0, '__v':0})
                .populate({path: 'userId', select: {'name': 1, 'Surname': 1, "_id": 0}})
                .populate({path: 'doctorId', select: {'name': 1, 'Surname': 1, "_id": 0}})
                .sort('date');
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

