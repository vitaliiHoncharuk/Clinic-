const adminRouter = require("express").Router();


const deleteUser = require('../controllers/user/deleteUserByLogin');
const getAllUsers = require("../controllers/user/getAllUsers");


adminRouter.delete('/delete/:login', deleteUser);
adminRouter.get('/all', getAllUsers);

module.exports = adminRouter;
