//Expected data from request  - doctorId

/*


expected request [GET] http://localhost:3000/api/rate/avg

example of expected data :

{
	"id":"DoctorID"
}


*/

const StarModel = require("../../DB/models/StarModel");
const DoctorModel = require("../../DB/models/DoctorModel");


module.exports = async (req, res) => {
    try {
        if (!req.body.id && (await DoctorModel.find({id: req.body.id}) !== [])) {
            throw new Error("Sorry,no doctor.");
        }
        const stars = await
            StarModel
                .find({doctorId: req.body.id})
                .populate({path: 'doctorId', select: {'name': 1, 'Surname': 1, "_id": 0}})
                .populate({path: 'userId', select: {'name': 1, 'Surname': 1, "_id": 0}});

        let starsSum = stars.reduce(function (accumulator, e) {
            return accumulator + e.stars;
        }, 0);
        let avg = Number.parseFloat(starsSum / stars.length).toFixed(2);

        res.status(200).json({
            success: true,
            msg: {
                amount: stars.length,
                avg
            }
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
};

