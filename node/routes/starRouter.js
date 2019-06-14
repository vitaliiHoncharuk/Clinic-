const starRouter = require("express").Router();
const getAvarages = require('../controllers/stars/getAvarages');
const rateDoctor = require('../controllers/stars/rateDoctor');

starRouter.get('/avg', getAvarages);
starRouter.post('/', rateDoctor);


module.exports = starRouter;
