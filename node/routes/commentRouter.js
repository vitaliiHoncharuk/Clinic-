const commentRouter = require("express").Router();
const getAllComments = require('../controllers/comments/getAllComments');
const getDoctorComments = require('../controllers/comments/getDoctorComments');
const  makeComment = require('../controllers/comments/makeComment');


commentRouter.get('/', getAllComments);
commentRouter.get('/:id', getDoctorComments);
commentRouter.post('/', makeComment);


module.exports = commentRouter;
