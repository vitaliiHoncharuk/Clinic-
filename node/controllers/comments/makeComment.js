//Expected data from request  - data (comment) and doctorId  - ID of doctor whom to make a comment
// + auth token [user]


// example of expected data(in JSON) :
// {
//     "data":"This doctor is so cool! OMG! I want to give him all my money for this purify,like really!eee",
//     "id":"5d00d04a8c77090d4d4886a2"    < -  Doctor Id
// }
//   [POST] http://localhost:3000/api/comment






const CommentModel = require("../../DB/models/CommentModel");
const tokenVerificator = require("../../helpers/tokenVerificator");
const {secret} = require("../../constants/secret");
module.exports = async (req,res) => {
    try {
        const token = req.get('Authorization');
        const {id} = tokenVerificator(token,secret);
        const doctorId = req.body.id;
        await CommentModel.create({
            comment:req.body.data,
            doctorId : doctorId,
            userId : id
        });
        res.status(200).json({
            success : true,
            msg : "OK!"
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
};

