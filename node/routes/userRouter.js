const userRouter = require("express").Router();
const registerUser = require('../controllers/user/registerUser');
const deleteUser = require('../controllers/user/deleteUserByLogin');
const getAllUsers = require('../controllers/user/getAllUsers');

userRouter.post('/', registerUser);
userRouter.delete('/delete/:login', deleteUser);
userRouter.get('/all', getAllUsers);

module.exports = userRouter;
