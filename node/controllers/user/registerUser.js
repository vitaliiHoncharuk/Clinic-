/*

admin only <-
expected request [POST] http://localhost:3000/api/user/

example of expected data :
{
	"login" : "login",
	"name": "name",
	"surname": "surname",
	"email": "email@gmail.com",
	"password": "password"
}

*/


const UserModel = require("../../DB/models/UserModel");
const roles = require("../../constants/roles");
module.exports = async (req, res) => {
    try {
        console.log(req.body);
        let {login, name, surname, email, password} = req.body;
        if (!name || !email || !password || !login || !surname) throw new Error('Some field / fields is / are empty...');

        if (await UserModel.countDocuments({"login": login}) > 0) {
            throw new Error("User with such login was already registered.")
        }
        if (await UserModel.countDocuments({"email": email}) > 0) {
            throw new Error("User with such email was already registered.")
        }
        await UserModel.create({
            login,
            name,
            surname,
            email,
            password,
            roles: roles.User
        });
        res.status(200).json({
            success: true,
            msg: `Successfully registered user ${name} ${surname}`
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
};

